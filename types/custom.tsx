import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { StaticImageData } from "next/image";

export interface IPortfolioDcs
{
    name: string,
    icon: IconProp,
    link?: string
}

export interface IPortfolioImg
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