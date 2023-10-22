const stockProducts = require('./data.json');

const getProductsRichInVitamin = () => {
  const informacoes = [];

  for (index = 0; index < stockProducts.length; index += 1) {
    if (stockProducts[index].nutritionalInfo.vitamins) {
      informacoes.push({
        description: stockProducts[index].description,
        formattedPrice: `R$ ${stockProducts[index].price}`,
        vitaminsInformation: Object.values(stockProducts[index].nutritionalInfo.vitamins),
      });
    }
  }
  return informacoes;
};

// console.log(getProductsRichInVitamin());

module.exports = { getProductsRichInVitamin };
