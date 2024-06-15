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
  tags?: IPortfolioTag[],
}

export interface IPortfolioTag {
  text: string,
  icon?: string,
  href? :string, 
}

export default async function PortfolioPage({ portfolio } : { portfolio: IPortfolioMetadata }) {
  
  return (
    <Link
      className={`cursor-pointer flex flex-col justify-between self-stretch w-96 space-y-3 bg-white-light outline outline-1 outline-${ portfolio.color }-light rounded-xl p-4`}
      href={ `/portfolio/${portfolio.slug}` }
    >
      <div className="flex flex-row min-w-[20rem] space-x-5">
        <div className={`min-w-20 min-h-20 bg-gradient-to-br from-${ portfolio.color } to-${ portfolio.color }-light rounded-lg`}>
          <Image className="m-auto h-full"
                 src={ `${ portfolio.logo }` }
                 alt={ `${ portfolio.name } logo` }
                 width={50}
                 height={50}
          />
        </div>
        <div className="flex flex-col space-y-1.5 my-auto">
          <div className={`text-${ portfolio.color }-dark text-xl font-bold`}>{ portfolio.name }</div>
          <div className="flex flex-row space-x-2">
            <div className="bg-gray-200 px-2 py-0.5 text-sm rounded-full">Tags 1</div>
            <div className="bg-gray-200 px-2 py-0.5 text-sm rounded-full">Tags 1</div>
          </div>
        </div>
      </div>
      <div className={ `mx-auto w-4 h-1 bg-${ portfolio.color }-dark rounded-full` }/>
      <p className={ `content-center grow text-${ portfolio.color }-dark text-justify leading-tight` }>
        { portfolio.description }
      </p>
    </Link>
  );
}