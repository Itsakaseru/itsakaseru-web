import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import getPortfolioData from "../../../data/portfolio";
import { IPortfolio } from "../../../types/custom";

export default function Head({ params: { slug } }: Params) {
  const portfolioData = getPortfolioData(slug);

    if (!portfolioData) return;

    const { name, desc }: IPortfolio = portfolioData as IPortfolio;
    const title = `Portfolio: ${ name }`;

  return (
    <>
			<title>{ title }</title>
      <meta name="description" content={ desc } />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </>
  )
}
