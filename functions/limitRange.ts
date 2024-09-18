function limiteRange(num: number, min: number, max: number) {
  const MIN = min ?? 1
  const MAX = max ?? 20
  const parsed = num
  return Math.min(Math.max(parsed, MIN), MAX)
}

export default limiteRange
