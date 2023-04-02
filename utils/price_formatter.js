// const { Intl } = require("intl");
// // Load the Kenyan English locale data
// require("intl/locale-data/jsonp/en-KE");

//method
export function formatCurrency(
  locale,
  currency,
  value,
  minimumFractionDigits = 2
) {
  return Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits,
  }).format(value);
}
