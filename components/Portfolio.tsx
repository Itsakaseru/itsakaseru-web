import Image from "next/image";
import Link from "next/link";

export interface IPortfolio {
  content: string, 
  metadata: IPortfolioMetadata
}

export interface IPortfolioMetadata {
  name: string, 
  description: string,
  slug: string, 
  logo: string, 
  color: string
  year: number
  tags?: IPortfolioTag[],
}

export interface IPortfolioTag {
  text: string,
  icon?: string,
  color?: string, 
  href? :string, 
}

export interface IPortfolioOptions {
  mode: "none" | "outline" | "background",
  showDescription: boolean,
}

export default async function Portfolio({ portfolio, options } : { portfolio: IPortfolioMetadata, options?: IPortfolioOptions }) {
  const outlineMode = `bg-white-light outline outline-1 outline-${ portfolio.color }-light`;
  const backgroundMode = `bg-${ portfolio.color }-white`;
  
  // Default to none mode
  let modeClass = "";
  if (options) {
    switch (options.mode) {
      case "outline":
        modeClass = outlineMode;
        break;

      case "background":
        modeClass = backgroundMode;
        break;
        
      default:
          break;
    }
  }
  
  return (
    <Link
      className={`cursor-pointer flex flex-col justify-between self-stretch max-w-96 space-y-3  ${ modeClass } rounded-xl p-4`}
      href={ `/portfolio/${portfolio.slug}` }
    >
      <div className="flex flex-row space-x-5">
        <div className={`min-w-20 min-h-20 bg-gradient-to-br from-${ portfolio.color } to-${ portfolio.color }-light rounded-lg`}>
          <Image className="m-auto h-full"
                 src={ `${ portfolio.logo }` }
                 alt={ `${ portfolio.name } logo` }
                 width={50}
                 height={50}
                 style={{ objectFit: "contain" }}
          />
        </div>
        <div className="flex flex-col space-y-1.5 my-auto">
          <div className={`text-${ portfolio.color }-dark text-xl font-bold`}>{ portfolio.name }</div>
          <div className="flex flex-row gap-2 flex-wrap">
            <div className={ `${ portfolio.color && portfolio.color ? `bg-${ portfolio.color }-dark text-white-light` : "bg-gray-300" } px-2 py-0.5 text-sm rounded-full` }>{ portfolio.year }</div>
            {
              portfolio.tags && portfolio.tags.map((tag) => {
                return (
                  <div
                    key={tag.text}
                    className={`${tag.color && tag.color ? `bg-${tag.color}-dark` : `bg-${ portfolio.color }-dark`} text-white-light px-2 py-0.5 text-sm rounded-full`}>
                    {tag.text}
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
      {
        portfolio.description && options && options.showDescription &&
          <p className={`content-center grow text-${portfolio.color}-dark text-justify leading-tight`}>
            {portfolio.description}
          </p>
      }
    </Link>
  );
}