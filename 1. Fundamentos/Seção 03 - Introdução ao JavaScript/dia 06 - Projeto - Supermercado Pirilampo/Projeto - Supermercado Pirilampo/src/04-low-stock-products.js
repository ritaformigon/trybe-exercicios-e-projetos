const stockProducts = require('./data.json');

const getLowStockProducts = () => {
  const lowStockProducts = [];
  for (const product of stockProducts) {
    if (product.quantityInStock > 0 && product.quantityInStock <= 10) {
      const productInfo = `${product.productName}: ${product.quantityInStock} unidades`;
      lowStockProducts.push(productInfo);
    }
  }
  return lowStockProducts;
};

// console.log(getLowStockProducts());

module.exports = { getLowStockProducts };

// HOF
// const stockProducts = require('./data.json');

// const getLowStockProducts = () => {
//    // Filtra os produtos com baixo estoque (quantidade entre 1 e 10)
//    const lowStockProducts = stockProducts.filter(product => product.quantityInStock > 0 && product.quantityInStock <= 10);
//    // Mapeia os nomes e quantidades dos produtos com baixo estoque
//   const lowStockProductInfo = lowStockProducts.map(product => `${product.productName}: ${product.quantityInStock} unidades`);

//   return lowStockProductInfo;
// };

// // console.log(getLowStockProducts());

// module.exports = { getLowStockProducts };
