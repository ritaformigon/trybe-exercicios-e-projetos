# Exercício Playground Functions 
  
## Requisitos: Parte 1 
  
### 1 - Crie uma função que divida uma frase 
  
Implemente a função `splitSentence` que divide uma frase de acordo com a quantidade de palavras.  
A função `splitSentence` recebe uma string como parâmetro e deve retornar um array com as palavras separadas.  
Exemplo: se a função receber a string 'go Trybe', o retorno deverá ser ['go', 'Trybe'].  

 
  
### 2 - Crie uma função que calcula a quantidade de pontos em um campeonato de futebol 
  
Implemente a função `footballPoints` que calcula a pontuação de um time de futebol em um campeonato a partir do número de vitórias e empates.  
A função `footballPoints` recebe o número de vitórias (`wins`) e o número de empates (`ties`) e retorna a quantidade de pontos que o time marcou em um campeonato.  
Para isso, considere que:  
- `wins`: é o número de vitórias e vale 3 pontos 
- `ties`: é o número de empates e vale 1 ponto

 

### 3 - Crie uma função que adiciona músicas em uma playlist

Implemente a função `addMusics` que adiciona músicas a uma playlist.  
A função `addMusics` recebe o nome do artista (`artistName`), o nome da música (`musicName`) e o tempo da música (`musicTime`). Após trabalhar esses dados, eles deverão ser armazenados em um array chamado `playlist`.  
Para isso, considere que:  
- Os valores acima devem ser enviados ao array, juntos, em formato de objeto.






## Requisitos: Parte 2

### 4 - Crie uma função que retorna o produto mais caro de acordo com uma categoria

Implemente a função `moreExpensive` que deverá retornar uma string contendo qual é o produto mais caro de acordo com uma categoria que será passada como parâmetro.  
A função `moreExpensive` deve receber a base de dados a ser trabalhada (data) e a categoria (category) do produto.  
A função deve retornar uma string contendo o produto mais caro da seguinte forma:  
- O produto mais caro é: `nome do produto`, que custa: R$ `preço do produto`. 
 
O preço do produto deverá ser apresentado contendo 2 casas decimais.



### 5 - Crie uma função que verifica se um determinado item já existe

Implemente a função `checkItem` que deverá retornar se um determinado item existe ou não na base de dados.  
A função `checkItem` deve receber a base de dados a ser trabalhada (`data`), a categoria (`category`) do produto e o produto a ser buscado (`item`).  
A função deve retornar `true` caso o produto já exista na base de dados ou `false` caso não exista.



### 6 - Crie uma função que adiciona um novo item caso ele ainda não exista

Implemente a função `addNewItem` que deverá adicionar um novo item caso esse item não exista na base de dados.  
A função `addNewItem` deve receber a base de dados a ser trabalhada (`data`), a categoria (`category`) do produto, o produto a ser buscado (`item`) e as outras informações de um item: `price`, `ingredients` e `calories`.  
- A função deve retornar o novo item caso o produto ainda não exista na base de dados
- Caso o item não exista, ele deve ser criado e adicionado à base de dados
- Caso o item já exista, a função deve retornar a mensagem: `O produto: "nome do produto" já existe!`



### 7 - Crie uma função que conta a quantidade de pessoas por gênero

Implemente a função `counterGender` que deverá contar quantas pessoas existem na base de dados por gênero.  
A função `counterGender` deve receber a base de dados a ser trabalhada (`data`) e retornar a quantidade de pessoas do gênero `male` e `female`.  
A função deve retornar as informações no formato de objeto conforme o exemplo:  
{
  male: 10,
  female: 15
}






## Requisitos: Parte 3

### 8 - Crie uma função que retorna os elementos de um determinado estado

Implemente a função `filterState` que deverá retornar todos os elementos que forem de um determinado estado.  
A função `filterState` deve receber a base de dados a ser trabalhada (`data`) e o estado a ser filtrado (`state`).  
A função deve retornar um novo array contendo todos os elementos que são do estado filtrado.



### 9 - Crie uma função que altera a propriedade picture

Implemente a função `changePicture` que deverá alterar a propriedade "picture" de todos os elementos da base de dados.  
A função `changePicture` deve receber a base de dados a ser trabalhada (`data`) e o link (`link`) a ser colocado no valor atual da propriedade.  
O valor da propriedade "picture" que deve ser colocado em todos os elementos é: `https://picsum.photos/200/300`.  
A função deve retornar um novo array contendo todos os elementos transformados.



### 10 - Crie um função que gera um relatório

Implemente a função `generateReport` que deverá gerar um relatório em forma de objeto, de várias informações da base de dados.
- A função `generateReport` deve receber a base de dados a ser trabalhada (`data`);
- A função `generateReport` deve retornar um objeto com várias informações:
  - `totalGuests`: valor total de pessoas convidadas. O valor deve ser um `number`;
  - `totalGender`: quantidade de pessoas por gênero. O valor deve ser um `object`;
  - `avgAge`: média de idade das pessoas. O valor deve ser um `number` com 2 casas decimais;
  - `countries`: array com todos os países representados.
     - Este array não pode conter valores repetidos - Pesquise sobre Array.includes();
     - Este array deve estar ordenado em ordem alfabética (A-Z) - Pesquise sobre Array.sort().




  
