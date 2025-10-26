export  const generateId = Date.now() * 1000 + Math.floor(Math.random() * 1000);

export const formatCurrency = (
  amount: number,
  currencySymbol = "$",
  decimalSeparator = ".",
  thousandSeparator = ","
) => {
  const parts = amount.toFixed().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, thousandSeparator);
  return `${currencySymbol}${parts.join(decimalSeparator)}`;
};
