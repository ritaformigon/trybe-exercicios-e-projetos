const stockProducts = require('./data.json');

const getUniqueProductsName = () => {
  const list = [];
  for (const product of stockProducts) {
    list.push(product.productName);
  }
  return list;
};

// console.log(getUniqueProductsName());

module.exports = { getUniqueProductsName };

// HOF
// const stockProducts = require('./data.json');

// const getUniqueProductsName = () => {
//   const list = [];
//   stockProducts.forEach((product) => {
//     list.push(product.productName);
//   });
//   return list;
// };

// module.exports = { getUniqueProductsName };
