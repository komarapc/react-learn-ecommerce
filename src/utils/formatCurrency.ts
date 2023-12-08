export const formatCurrency = (price: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    compactDisplay: "long",
  }).format(price);
};
