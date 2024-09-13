import { CurlyBracketTwoProps } from "./types"

const CurlyBracketTwo = ({
  state,
  startLeft,
  left,
  style,
  ...rest
}: CurlyBracketTwoProps) => {
  return (
    <svg
      viewBox="0 0 250 250"
      style={{ left: `${left}px`, ...style }}
      {...rest}
    >
      <g
        width="150"
        height="150"
        transform={`translate(50, 90) rotate(${startLeft && left ? ((startLeft - left) / 250) * 360 : 0} 75 75)`}
      >
        <circle
          cx="75"
          cy="75"
          r="69"
          fill="#fff"
          strokeWidth="3"
          stroke="#000"
        ></circle>
        <text
          x="45"
          y="75"
          textAnchor="middle"
          dominantBaseline="middle"
          fontFamily="Arial"
          fontSize="90px"
          fontWeight="900"
          xmlSpace="preserve"
        >
          <tspan fill="#e0138c">&#123; &#125;</tspan>
        </text>
      </g>
    </svg>
  )
}

export default CurlyBracketTwo
