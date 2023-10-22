const stockProducts = require('./data.json');

const getOutOfStockProducts = () => {
  const productNames = [];

  for (const product of stockProducts) {
    if (product.quantityInStock === 0) {
      productNames.push(product.productName);
    }
  }
  return productNames;
};

// console.log(getOutOfStockProducts());

module.exports = { getOutOfStockProducts };

// HOF
// const stockProducts = require('./data.json');

// const getOutOfStockProducts = () => {
//   // Filtra os produtos com quantidade em estoque igual a zero
//   const outOfStockProducts = stockProducts.filter(product => product.quantityInStock === 0);
//   // Mapeia apenas os nomes dos produtos indisponíveis
//   const productNames = outOfStockProducts.map(product => product.productName);

//   return productNames;
// };

// module.exports = { getOutOfStockProducts };
