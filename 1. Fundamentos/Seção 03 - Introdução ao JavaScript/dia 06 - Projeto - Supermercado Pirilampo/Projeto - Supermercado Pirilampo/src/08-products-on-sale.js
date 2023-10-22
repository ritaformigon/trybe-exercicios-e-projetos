const stockProducts = require('./data.json');

const getProductsOnSale = () => {
  const productsOnSale = [];
  for (const product of stockProducts) {
    if (product.onSale === true) {
      const formattedPrice = `R$ ${product.price.toFixed(2)}`;
      const productInfo = {
        description: product.description,
        formattedPrice,
        onSale: true,
      };
      productsOnSale.push(productInfo);
    }
  }
  return productsOnSale;
};

// console.log(getProductsOnSale());

module.exports = { getProductsOnSale };
