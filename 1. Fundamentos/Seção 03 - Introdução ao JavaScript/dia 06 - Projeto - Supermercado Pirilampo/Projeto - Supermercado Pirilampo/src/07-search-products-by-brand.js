const stockProducts = require('./data.json');

function searchProductsByBrand(brandName) {
  if (!brandName) {
    return [];
  }

  const productsByBrand = [];

  for (const product of stockProducts) {
    if (product.brand.toLowerCase() === brandName.toLowerCase()) { // Convertendo para minúsculas para ser insensível a maiúsculas/minúsculas
      const formattedPrice = `R$ ${product.price.toFixed(2)}`;
      productsByBrand.push({
        description: product.description,
        formattedPrice,
      });
    }
  }

  return productsByBrand;
}

// console.log(searchProductsByBrand());

module.exports = { searchProductsByBrand };
