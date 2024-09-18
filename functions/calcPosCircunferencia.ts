function calcPosCircunferencia(
  centroX: number,
  centroY: number,
  raio: number,
  anguloGraus: number
) {
  // Converter o ângulo de graus para radianos
  const anguloRadianos = (anguloGraus * Math.PI) / 180

  // Calcular as coordenadas x e y
  const cx = centroX + raio * Math.cos(anguloRadianos)
  const cy = centroY + raio * Math.sin(anguloRadianos)

  return { cx, cy }
}

export default calcPosCircunferencia
