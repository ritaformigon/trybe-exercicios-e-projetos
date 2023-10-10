// Exercício 1

let num1 = 10;
let num2 = 6;

console.log('Soma: ' + (num1 + num2));
console.log('Subtração: ' + (num1 - num2));
console.log('Multiplicação: ' + (num1 * num2));
console.log('Divisão: ' + (num1 / num2));
console.log('Módulo: ' + (num1 % num2));


// Exercício 2

let num3 = 20;
let num4 = 21;

if (num3 > num4) {
  console.log(num1 + " é maior que " + num2);
} else if (num3 === num4) {
  console.log("Os números são iguais.");
} else {
  console.log(num4 + " é maior que " + num3);
};


// Exercício 3

let num5 = 4;
let num6 = 9;
let num7 = 11;

if (num5 > num6 && num5 > num7) {
  console.log('O maior número é: ' + num5);
} else if (num6 > num5 && num6 > num7) {
  console.log('O maior número é: ' + num6);
} else if (num7 > num5 && num7 > num6){
  console.log('O maior número é: ' + num7);
} else {
  console.log('Tem números iguais!');
};


// Exercício 4

let degreeAngleA = 65;
let degreeAngleB = 100;
let degreeAngleC = 15;

let sumOfAngles = degreeAngleA + degreeAngleB + degreeAngleC;

let allAnglesArePositives = degreeAngleA > 0 && degreeAngleB > 0 && degreeAngleC > 0;

if(allAnglesArePositives){
  if (sumOfAngles === 180) {
    console.log(true);
  } else {
    console.log(false);
  };
} else {
  console.log('Erro: ângulo inválido!');
}


// Exercício 5

let chessPiece = 'bispo';

switch (chessPiece.toLowerCase()) {
  case 'rei':
    console.log('Rei -> Uma casa para qualquer direção.');
    break;
  case 'bispo':
    console.log('Bispo -> Diagonais.');
    break;
  case 'rainha':
    console.log('Rainha -> Diagonal, horizontal e vertical.');
    break;
  case 'cavalo':
    console.log('Cavalo -> "L" pode pular sobre as peças.');
    break;
  case 'torre':
    console.log('Torre -> Horizontal e vertical.');
    break;
  case 'peão':
    console.log("Peão -> Uma casa para frente, no primeiro movimento podem ser duas casas.");
    break;
  default:
    console.log('Erro, peça inválida!');
};


// Exercício 6

const num8 = 2;
const num9 = 3;
const num10 = 5;

let isEven = false;

if ((num8 % 2 === 0 || num9 % 2 === 0 || num10 % 2 === 0)) {
  isEven = true;
};

console.log(isEven);


// Exercício 7

let aliquotINSS;
let aliquotIR;

let grossSalary = 3000;

if (grossSalary <= 1556.94) {
  aliquotINSS = grossSalary * 0.08;
} else if (grossSalary <= 2594.92) {
  aliquotINSS = grossSalary * 0.09;
} else if (grossSalary <= 5189.82) {
  aliquotINSS = grossSalary * 0.11;
} else {
  aliquotINSS = 570.88;
};

let baseSalary = grossSalary - aliquotINSS;

if (baseSalary <= 1903.98) {
  aliquotIR = 0;
} else if (baseSalary <= 2826.65) {
  aliquotIR = (baseSalary * 0.075) - 142.80;
} else if (baseSalary <= 3751.05) {
  aliquotIR = (baseSalary * 0.15) - 354.80;
} else if (baseSalary <= 4664.68) {
  aliquotIR = (baseSalary * 0.225) - 636.13;
} else {
  aliquotIR = (baseSalary * 0.275) - 869.36;
};

console.log("Salário: R$" + (baseSalary - aliquotIR));
