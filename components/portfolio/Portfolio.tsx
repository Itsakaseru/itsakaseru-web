import { Link } from "react-router";
import { motion } from "motion/react";
import type { IMarkdownMetadata } from "@/libs/Markdown";
import { getColorClass } from "@/libs/Color";

export interface IPortfolioOptions {
  mode:            "none" | "outline" | "background",
  showDescription: boolean,
}

export default function Portfolio(
  {
    portfolio,
    options,
  }:
  {
    portfolio: IMarkdownMetadata,
    options?:  IPortfolioOptions,
  }
) {
  const outlineMode = `bg-white-light outline outline-1 ${getColorClass("outline", portfolio.color, "light")}`;
  const backgroundMode = getColorClass("background", portfolio.color, "white");

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
    <motion.div
      layoutId={ portfolio.slug }
      className={
        "flex lg:flex-grow-0 lg:w-auto lg:max-w-96 " +
        "flex-grow w-full"
      }
      whileHover={{ scale: 1.05 }}
    >
      <Link
        className={ `cursor-pointer flex flex-col grow justify-between space-y-3 ${modeClass} rounded-xl p-4` }
        to={ `/portfolio/${portfolio.slug}` }
      >
        <motion.div className="flex flex-row space-x-5" layout="position">
          <div className={ `min-w-20 min-h-20 bg-gradient-to-br ${getColorClass("gradient", portfolio.color)} rounded-lg` }>
            <img
              className="m-auto w-12 h-full"
              src={ `${portfolio.logo}` }
              alt={ `${portfolio.name} logo` }
              width={ 50 }
              height={ 50 }
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="flex flex-col space-y-1.5 my-auto">
            <div className={ `${getColorClass("text", portfolio.color, "dark")} text-xl font-bold leading-tight` }>{ portfolio.name }</div>
            <div className="flex flex-row gap-2 flex-wrap">
              <div
                className={
                  `${portfolio.color && portfolio.color ? `${getColorClass("background", portfolio.color, "dark")} text-white-light` : "bg-gray-300"} px-2 py-0.5 sm:text-sm rounded-full ` +
                  "text-xs"
                }
              >
                { portfolio.year }
              </div>
              {
                portfolio.tags && portfolio.tags.map((tag) => {
                  return (
                    <div
                      key={ tag.text }
                      className={
                        `${tag.color && tag.color ? `${getColorClass("background", tag.color, "dark")}` : `${getColorClass("background", portfolio.color, "dark")}`} text-white-light px-2 py-0.5 sm:text-sm rounded-full ` +
                        "text-xs"
                      }
                    >
                      { tag.text }
                    </div>
                  );
                })
              }
            </div>
          </div>
        </motion.div>
        {
          portfolio.description && options && options.showDescription &&
          <p className={ `content-center grow ${getColorClass("text", portfolio.color, "dark")} text-justify leading-tight` }>
            { portfolio.description }
          </p>
        }
      </Link>
    </motion.div>
  );
}
