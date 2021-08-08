import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface IPortfolioDcs
{
    name: string,
    icon: IconProp,
    link?: string
}

interface IPortfolioImg
{
    type: string,
    alt: string,
    src: string,
    blurSrc: string,
    width: number,
    height: number,
    layout: string
}

export interface IPortfolio
{
    id: string,
    name: string,
    icon: StaticImageData,
    color: string,
    desc: string,
    longDesc: string,
    dcs: IPortfolioDcs[],
    img?: IPortfolioImg[]
    video?: string
}