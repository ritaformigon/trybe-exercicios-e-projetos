# Projeto Supermercado Pirilampo

## Requisitos do projeto

### 1. Crie uma função que retorne a quantidade de produtos únicos em estoque  
- Sua função deve encontrar e retornar o tamanho o array stockProducts — que contém objetos de produtos do estoque.  
- Sua função deve, obrigatoriamente, retornar um number.
- Produto único é um conceito utilizado para identificar exclusivamente um produto em estoque. Exemplo: o Arroz Tio João tem 50 unidades em estoque, porém conta apenas como 1 produto.
- Considere que cada objeto do array stockProducts é um produto único.



### 2. Crie uma função que retorne os nomes dos produtos únicos em estoque 
- Sua função deve percorrer o array stockProducts — que contém objetos de produto do estoque — em busca do nome de cada produto. Ao final, a função deverá retornar um nova lista que armazene o nome dos produtos.  
- Sua função deve, obrigatoriamente, retornar um array de string.
- O array retornado pela função deve ter o nome de todos os produtos do array de objetos em estoque.



### 3. Crie uma função que retorne os nomes dos produtos indisponíveis do estoque 
- Sua função deve percorrer o array stockProducts — que contém objetos de produto do estoque — em busca do nome de cada produto que esteja indisponível no estoque. Ao final, a função deverá retornar uma nova lista que armazene o nome dos produtos.  
- Sua função deve, obrigatoriamente, retornar um array de string.
- Um produto será considerado fora de estoque quando a propriedade quantityInStock dele for igual a `0`.



### 4. Crie uma função que retorne os produtos com baixo estoque em um formato específico 
- Sua função deve percorrer o array stockProducts — que contém objetos de produto do estoque — em busca do nome e da quantidade em estoque de cada produto que esteja com baixo estoque. Ao final, a função deverá retornar uma nova lista que armazene uma mensagem personalizada informando o nome e a quantidade do produto.  
- Sua função deve, obrigatoriamente, retornar um `array` de `string`.
- Um produto será considerado com baixo estoque quando a propriedade `quantityInStock` dele for maior que `0` e menor ou igual a `10`.
- O formato dos elementos do array deve ser: `{nome do produto}: {quantidade em estoque} unidades`.
- Você não deve se preocupar com a flexão de números dos substantivos nesse momento. Se o produto tiver 1 unidade em estoque, a mensagem deverá ser apresentar a palavra unidades no plural. Exemplo: "Pipoca: 1 unidades".



### 5. Crie uma função que retorne o total de produtos em estoque
- Sua função deve percorrer o array stockProducts — que contém objetos de produto do estoque — em busca da quantidade em estoque de cada produto. Ao final, a função deverá retornar o somatório da quantidade de todos os produtos em estoque.
- Sua função deve, obrigatoriamente, retornar um `number`.
- Utilize a propriedade `quantityInStock`, do objeto de produto do estoque, para acumular os totais de todos os produtos do estoque.



### 6. Crie uma função que busque um produto pelo nome
- Sua função deve percorrer o array `stockProducts` — que contém objetos de produto do estoque — em busca do nome de um produto específico. Caso o produto seja encontrado, a função irá retornar um novo objeto com as propriedades de descrição e valor formatado do produto. Caso contrário, sua função irá retornar um valor nulo.
- Sua função deverá receber o nome do produto por parâmetro.
- Considere que o nome do produto é único. Portanto essa função não retorna um `array` de produtos e sim um `object` com as informações dele.
- Se o produto for encontrado, sua função irá retornar um novo objeto com as seguintes chaves:
  - `description`: descrição do produto, sem nenhuma modificação.
  - `formattedPrice`: prefixo da moeda Real (`R$`) acrescido do preço do produto (`1.99`, por exemplo), com 1 espaço entre os dados. Além disso, o separador de casas decimais será o ponto (`.`), uma vez que a informação do *data.json* já se encontra nesse formato. Exemplo: `R$ 10.99`. 
- Se o produto não for encontrado, sua função irá retornar `null`.  
- A função deve retornar `null` caso seja chamada sem parâmetro.



### 7. Crie uma função que busque por produtos de uma marca específica
- Sua função deve percorrer o array stockProducts — que contém objetos de produto do estoque — em busca de produtos de uma marca específica. Caso produtos sejam encontrados, a função deverá retornar uma nova lista de objetos com as propriedades de descrição e valor formatado do produto. Caso contrário, sua função irá retornar uma lista vazia.  
- Sua função deverá receber a marca por parâmetro.  
- Se produtos forem encontrados, sua função irá retornar um novo array de objetos. Cada objeto deve ter as seguintes chaves:  
  - `description`: descrição do produto, sem nenhuma modificação. 
  - `formattedPrice`: prefixo da moeda Real (`R$`) acrescido do preço do produto (`1.99`, por exemplo), com 1 espaço entre os dados. Além disso, o separador de casas decimais será o ponto (`.`), uma vez que a informação do data.json já se encontra nesse formato. Exemplo: `R$ 10.99`. 
- Se nenhum produto for encontrado, sua função irá retornar um `array` vazio.  
- A função deve retornar um `array` vazio caso seja chamada sem parâmetro.



### 8. Crie uma função que busque por produtos na promoção
- Sua função deve percorrer o array stockProducts — que contém objetos de produto do estoque — em busca de produtos em promoção. Caso produtos sejam encontrados, a função irá retornar uma nova lista de objetos com as propriedades de descrição, o valor formatado do produto e a informação booleana de oferta.  
- Um produto é considerado em promoção quando a chave onSale tiver o valor `true`.  
- Se produtos forem encontrados, sua função irá retornar um novo `array` de objetos. Cada objeto deve ter as seguintes chaves:  
  - `description`: descrição do produto, sem nenhuma modificação.
  - `formattedPrice`: prefixo da moeda Real (`R$`) acrescido do preço do produto (`1.99`, por exemplo), com 1 espaço entre os dados. Além disso, o separador de casas decimais será o ponto (`.`), uma vez que a informação do *data.json* já se encontra nesse formato. Exemplo: `R$ 10.99`. 
  - `onSale`: informação booleana identificando que o produto está em promoção.



### 9. Crie uma função que retorne todos os produtos com informações sobre alergia ou intolerância
- Sua função deve percorrer o array `stockProducts` — que contém objetos de produto do estoque — em busca de produtos com informações de alergia e intolerância alimentar. Caso produtos sejam encontrados, a função irá retornar uma nova lista de objetos com as propriedades de descrição, o valor formatado do produto e a informação formatada de alergia e intolerância.  
- Sua função deve, obrigatoriamente, retornar um `array` de objetos com as seguintes chaves:
  - `description`: descrição do produto, sem nenhuma modificação.
  - `formattedPrice`: prefixo da moeda Real (`R$`) acrescido do preço do produto (`1.99`, por exemplo), com 1 espaço entre os dados. Além disso, o separador de casas decimais será o ponto (`.`), uma vez que a informação do *data.json* já se encontra nesse formato. Exemplo: `R$ 10.99`.
  - `allergyOrIntoleranceMessage`: deve ser do tipo `string` e só será adicionada ao novo objeto quando houver informações de alergia ou intolerância no objeto do produto. Deve seguir o seguinte formato: `Pode conter: {item 1} {item 2} {item N}`. A quantidade de itens varia de acordo com o tamanho do array `allergyOrIntolerance` do produto em estoque.



### 10. Crie uma função que retorne todos os produtos que possuam alguma vitamina em seu valor nutricional
- Sua função deve percorrer o array `stockProducts` — que contém objetos de produto do estoque — em busca de produtos com informações de vitaminas. Caso produtos sejam encontrados, a função irá retornar uma nova lista de objetos com as propriedades de descrição, o valor formatado do produto e a lista de vitaminas disponíveis no produto.  
- Sua função deve, obrigatoriamente, retornar um `array` de objetos com as seguintes chaves:  
  - `description`: descrição do produto, sem nenhuma modificação.  
  - `formattedPrice`: prefixo da moeda Real (`R$`) acrescido do preço do produto (`1.99`, por exemplo), com 1 espaço entre os dados. Além disso, o separador de casas decimais será o ponto (`.`), uma vez que a informação do data.json já se encontra nesse formato. Exemplo: `R$ 10.99`.  
  - `vitaminsInformation`: deve ser um `array` de `string`. O texto dos elementos desse array deve seguir o formato `{nome da vitamina} - {quantidade de vitamina presente}`. A informação do nome da vitamina é encontrada nas chaves do objeto `nutritionalInfo.vitamins` do produto em estoque, já a informação de quantidade de vitamina presente é encontrada nos valores do mesmo objeto.
