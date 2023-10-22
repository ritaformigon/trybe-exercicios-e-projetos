const stockProducts = require('./data.json');

const getProductsAmount = () => {
  let total = 0;
  for (const product of stockProducts) {
    total += product.quantityInStock;
  }
  return total;
};

// console.log(getProductsAmount());

module.exports = { getProductsAmount };
