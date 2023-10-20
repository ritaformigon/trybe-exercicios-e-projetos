const menu = require('./mcDonalds');
const guestsDatabase = require('./data.json');

// =================================================
// PARTE 1
// =================================================

// Requisito 1 - Crie uma função que divida uma frase

function splitSentence(string) {
  let word = string.split(' ');
  return word;
}

// Requisito 2 - Crie uma função que calcula a quantidade de pontos em um campeonato de futebol

function footballPoints(wins, ties) {
  let pointsTotal = 3 * wins + 1 * ties;
  return pointsTotal;
}

// Requisito 3 - Crie uma função que adiciona músicas em uma playlist

let playlist = [];
function addMusics(artistName, musicName, musicTime) {
  let music = {
    artist: artistName,
    music: musicName,
    musicTime,
  };
  playlist.push(music);
}

// =================================================
// PARTE 2
// =================================================

// Requisito 4 - Crie uma função que retorna o produto mais caro de acordo com uma categoria

const moreExpensive = (data, category) => {
  let nome = data[category][0].name;
  let preco = data[category][0].price;

  for (let indice = 1; indice < data[category].length; indice += 1) {
    if (data[category][indice].price > preco) {
      nome = data[category][indice].name;
      preco = data[category][indice].price;
    }
  }
  return `O produto mais caro é: ${nome}, que custa: R$${preco.toFixed(2)}.`; // Produto mais caro
};

// Requisito 5 - Crie uma função que verifica se um determinado item já existe

const checkItem = (data, category, item) => {
  let tamanho = data[category].length;
  for (let index = 0; index < tamanho; index += 1) {
    if (data[category][index].name === item) {
      return true;
    }
  }

  return false;
};

// Requisito 6 - Crie uma função que adiciona um novo item caso ele ainda não exista

const addNewItem = (data, categoria, nomeProduto, preco, ingredientes, calorias) => {
  if (checkItem(data, categoria, nomeProduto)) {
    return `O produto: "${nomeProduto}" já existe!`;
  }

  const newItem = {
    name: nomeProduto,
    price: preco,
    ingredients: ingredientes,
    calories: calorias,
  };

  data[categoria].push(newItem);

  return newItem;
};

// Requisito 7 - Crie uma função que conta a quantidade de pessoas por gênero

const counterGender = (guestsDatabase) => {
  let countMale = 0;
  let countFemale = 0;

  for (let index = 0; index < guestsDatabase.guests.length; index += 1) {
    const element = guestsDatabase.guests[index];
    if (element.gender === 'male') {
      countMale += 1;
    } else if (element.gender === 'female') {
      countFemale += 1;
    }
  }

  return { male: countMale, female: countFemale };
};

// =================================================
// PARTE 3
// =================================================

// Requisito 8 - Crie uma função que retorna os elementos de um determinado estado

const filterState = (data, state) => {
  const resultado = [];
  for (let index = 0; index < data.guests.length; index += 1) {
    const guest = data.guests[index];
    if (guest.address.state === state) {
      resultado.push(guest);
    }
  }
  return resultado;
};

// Requisito 9 - Crie uma função que altera a propriedade `picture`

const changePicture = (data, link) => {
  for (let index = 0; index < data.guests.length; index += 1) {
    data.guests[index].picture = link;
  }
  return data.guests;
};

// Requisito 10 - Crie um função que gera um relatório

const generateReport = (data) => {
  const relatorio = {
    totalGuests: data.guests.length,
    totalGender: counterGender(data),
    avgAge: 0,
    countries: [],
  };
  let mediaIdade = 0;
  let countries = [];
  for (let index = 0; index < data.guests.length; index += 1) {
    mediaIdade += data.guests[index].age;
    if (!countries.includes(data.guests[index].country)) {
      countries.push(data.guests[index].country);
    }
  }
  relatorio.avgAge = Number((mediaIdade / data.guests.length).toFixed(2));
  relatorio.countries = countries.sort();
  return relatorio;
};

// Não modifique as linhas abaixo
module.exports = {
  splitSentence: typeof splitSentence === 'function' ? splitSentence : (() => {}),
  footballPoints: typeof footballPoints === 'function' ? footballPoints : (() => {}),
  addMusics: typeof addMusics === 'function' ? addMusics : (() => {}),
  playlist: typeof playlist === 'undefined' ? [] : playlist,
  moreExpensive: typeof moreExpensive === 'function' ? moreExpensive : (() => {}),
  checkItem: typeof checkItem === 'function' ? checkItem : (() => {}),
  addNewItem: typeof addNewItem === 'function' ? addNewItem : (() => {}),
  counterGender: typeof counterGender === 'function' ? counterGender : (() => {}),
  filterState: typeof filterState === 'function' ? filterState : (() => {}),
  changePicture: typeof changePicture === 'function' ? changePicture : (() => {}),
  generateReport: typeof generateReport === 'function' ? generateReport : (() => {}),
};
