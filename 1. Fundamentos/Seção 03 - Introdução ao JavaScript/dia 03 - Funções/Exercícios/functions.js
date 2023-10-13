// Requisito 1 - Crie a função verifyPalindrome

function verifyPalindrome(string) {
  string = string.replace(/\s/g, '').toLowerCase(); // método replace() percorre toda a string em busca da sequência de caracteres a ser substituída. E (/\s/g, '') substitui os espaços vazios por strings vazias.
  const stringInvertida = string.split('').reverse().join('');
  return string === stringInvertida;
}

// Requisito 2 - Crie a função getHighestIndex

function getHighestIndex(array) {
  let maxNumber = array[0];
  let maxIndex = 0;
  for (let index = 1; index < array.length; index += 1) {
    if (array[index] > maxNumber) {
      maxNumber = array[index];
      maxIndex = index;
    }
  }
  return maxIndex;
}

// Requisito 3 - Crie a função getSmallestIndex

function getSmallestIndex(array) {
  let minNumber = array[0];
  let minIndex = 0;
  for (let index = 1; index < array.length; index += 1) {
    if (array[index] < minNumber) {
      minNumber = array[index];
      minIndex = index;
    }
  }
  return minIndex;
}

// Requisito 4 - Crie a função getLongestWord

function getLongestWord(array) {
  let maxWord = array[0];
  for (let index = 1; index < array.length; index += 1) {
    if (array[index].length > maxWord.length) {
      maxWord = array[index];
    }
  }
  return maxWord;
}

// Requisito 5 - Crie a função countHighestNumberMaxOccurrences

function countHighestNumberMaxOccurrences(array) {
  let number = array[0];
  let countNumber = 1;
  for (let index = 1; index < array.length; index += 1) {
    if (array[index] > number) {
      number = array[index];
      countNumber = 1;
    } else if (array[index] === number) {
      countNumber += 1;
    }
  }
  return countNumber;
}
