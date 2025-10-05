import type { JSX } from "react"

export interface ISingleCardProps {
    iconSVG:JSX.Element
    title:string 
    content:string
    soon?:boolean
    nonIcon?:boolean
}