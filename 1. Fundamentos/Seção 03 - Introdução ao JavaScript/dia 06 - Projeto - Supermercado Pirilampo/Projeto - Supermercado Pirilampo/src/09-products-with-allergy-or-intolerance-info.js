const stockProducts = require('./data.json');

const getProductsWithAllergyOrIntoleranceInfo = () => {
  const productsWithInfo = [];
  for (const product of stockProducts) {
    const { description, price, allergyOrIntolerance } = product;
    // Verifica se o produto possui informações de alergia ou intolerância
    if (allergyOrIntolerance && allergyOrIntolerance.length > 0) {
      // Formata a mensagem de alergia ou intolerância
      const allergyOrIntoleranceMessage = `Pode conter: ${allergyOrIntolerance.join(' ')}`;
      // Formata o preço do produto
      const formattedPrice = `R$ ${price.toFixed(2)}`;
      // Cria um objeto com as informações formatadas
      const productInfo = {
        description,
        formattedPrice,
        allergyOrIntoleranceMessage,
      };
      productsWithInfo.push(productInfo);
    }
  }
  return productsWithInfo;
};

// console.log(getProductsWithAllergyOrIntoleranceInfo());

module.exports = { getProductsWithAllergyOrIntoleranceInfo };
