/**
 * Calcula o valor total de um produto parcelado com juros.
 * @param numInstallments - Número de parcelas.
 * @param interestRate - Taxa de juros anual em porcentagem.
 * @param productValue - Valor do produto.
 * @returns - Valor total a ser pago com juros.
 */
export function calculateTotalWithInterest(numInstallments: number, interestRate: number, productValue: number): number {
  // Converte a taxa de juros de porcentagem para decimal
  const interestDecimal = interestRate / 100;

  // Calcula o valor de cada parcela com juros
  const installmentValue = productValue / numInstallments;

  // Calcula o valor total com juros simples
  const totalValue = installmentValue * numInstallments * (1 + interestDecimal);

  return totalValue / numInstallments;
}
