const stockProducts = require('./data.json');

const searchProductByName = (searchProduct) => {
  const result = {};
  for (let index = 0; index < stockProducts.length; index += 1) {
    if (stockProducts[index].productName === searchProduct) {
      result.description = stockProducts[index].description;
      result.formattedPrice = `R$ ${stockProducts[index].price.toFixed(2)}`;
      return result;
    }
  }
  return null;
};

// console.log(searchProductByName());

module.exports = { searchProductByName };
