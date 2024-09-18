import calcPosCircunferencia from "../../functions/calcPosCircunferencia"
import limiteRange from "../../functions/limitRange"
import { CurlyBracketTwoProps, PartsProps } from "./types"

const sizeParts = 150
const radiusParts = sizeParts / 2
const radiusHands = 25

const centerBody = { cx: 50 + radiusParts, cy: 90 + radiusParts }

const stroke = {
  fill: "#fff",
  stroke: "#000",
  strokeWidth: "3",
}

const Head = ({ cx, cy, angleRotate }: PartsProps) => {
  const transform = `translate(${cx - radiusParts}, ${cy - radiusParts}) rotate(${angleRotate ?? 0} ${radiusParts} ${radiusParts})`

  return (
    <g transform={transform}>
      <path
        d="m145.35 86.599c-6.2791 14.258-57.105 40.903-72.335 38.982-11.535-1.8924-67.173-1.1059-68.475-44.33-0.16328-26.801 100.2-65.461 115.45-58.085 15.477 12.378 28.852 52.704 25.364 63.433z"
        {...stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="m117.06 27.601c9.9705 5.8724 25.152 48.282 23.37 56.173-2.6917 8.7189-59.579 41.101-67.155 35.245-9.8457-5.713-29.18-52.891-25.828-60.287 3.385-6.7857 61.359-35.657 69.612-31.13z" />
    </g>
  )
}

const Body = ({ cx, cy, angleRotate }: PartsProps) => {
  const transform = `translate(${cx - radiusParts}, ${cy - radiusParts}) rotate(${angleRotate ?? 0} ${radiusParts} ${radiusParts})`

  return (
    <g transform={transform}>
      <circle cx={radiusParts} cy={radiusParts} r={radiusParts} {...stroke} />
      <g transform="matrix(1.3158 0 0 1.3158 -57.666 -18.161)" fill="#e0138c">
        <path d="m84.918 28.66v14.414h-1.9775q-2.7686 0-4.1748 1.1865-1.3623 1.1426-1.9336 3.5596-0.30762 1.3184-0.35156 7.251-0.04394 5.8887-1.2305 9.2725-0.87891 2.5928-2.5049 4.1748-1.2305 1.1865-4.043 2.417 2.9443 1.3623 4.3506 2.8564 1.4502 1.4502 2.4609 4.4824 1.0107 2.9883 1.0107 9.5801 0 5.9326 0.61523 7.7344t2.0215 2.5488q1.4502 0.74707 5.7568 0.74707v14.238h-5.5371q-8.5693 0-12.173-1.8896-3.6035-1.8457-5.1416-5.4492-1.5381-3.5596-1.5381-10.723 0-1.582 0.08789-3.1641 0.04395-0.9668 0.04395-1.9775 0-5.0977-0.92285-7.251-0.92285-2.1533-2.6807-3.1201-1.7139-0.9668-5.0098-1.0547v-15.073q3.3838 0 5.0537-1.0547 1.7139-1.0547 2.5928-3.208 0.87891-2.1973 0.87891-7.3828v-1.4941q-0.04395-1.0107-0.04395-2.0215 0-7.7783 1.2744-11.25 1.3184-3.4717 3.6035-5.3174 1.7139-1.4062 4.6582-2.1094 3.9111-0.92285 8.9209-0.92285z" />
        <path d="m116.95 28.66v14.414h1.9775q2.7686 0 4.1309 1.1865 1.4062 1.1426 1.9775 3.5596 0.30761 1.3184 0.35156 7.251 0.0439 5.8887 1.2305 9.2725 0.87891 2.5928 2.5049 4.1748 1.2305 1.1865 4.043 2.417-2.9443 1.3623-4.3945 2.8564-1.4062 1.4502-2.417 4.4824-1.0108 2.9883-1.0108 9.5801 0 5.9326-0.61523 7.7344t-2.0654 2.5488q-1.4062 0.74707-5.7129 0.74707v14.238h5.5371q8.5693 0 12.173-1.8896 3.6035-1.8457 5.1416-5.4492 1.5381-3.5596 1.5381-10.723 0-1.582-0.0879-3.1641-0.0439-0.9668-0.0439-1.9775 0-5.0977 0.92285-7.251 0.92286-2.1533 2.6367-3.1201 1.7578-0.9668 5.0537-1.0547v-15.073q-3.3838 0-5.0976-1.0547-1.6699-1.0547-2.5488-3.208-0.87891-2.1973-0.87891-7.3828v-1.4941q0.0439-1.0107 0.0439-2.0215 0-7.7783-1.3184-11.25-1.2744-3.4717-3.5596-5.3174-1.7139-1.4062-4.6582-2.1094-3.9111-0.92285-8.9209-0.92285z" />
      </g>
    </g>
  )
}

const CurlyBracketTwo = ({
  state,
  startLeft = 0,
  finishLeft = 0,
  left = 0,
  speed = 0,
  style,
  ...rest
}: CurlyBracketTwoProps) => {
  const distanceThrow = startLeft - left

  const handXLeft = 200 + speed
  const handXRight = 80 + speed
  const handY = 160 + Math.sin(distanceThrow / 10) * 5

  const rotateBody = (distanceThrow / 250) * 360
  const rotateHead = limiteRange(speed, -30, 30)

  const centerHead = calcPosCircunferencia(
    centerBody.cx,
    centerBody.cy,
    radiusParts,
    270 + rotateHead
  )

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      viewBox="0 0 250 250"
      style={{ overflow: "visible", left: `${left}px`, ...style }}
      {...rest}
    >
      <circle cx={handXLeft} cy={handY} r={radiusHands} {...stroke} />

      <Body angleRotate={rotateBody} {...centerBody} />
      <Head angleRotate={rotateHead} {...centerHead} />

      <circle cx={handXRight} cy={handY} r={radiusHands} {...stroke} />
    </svg>
  )
}

export default CurlyBracketTwo
