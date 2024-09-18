import { HTMLProps } from "react"

export type PartsProps = { cx: number; cy: number; angleRotate: number }

export type CurlyBracketTwoProps = {
  state?: string
  startLeft?: number
  finishLeft?: number
  left?: number
  speed?: number
} & HTMLProps<SVGSVGElement>
