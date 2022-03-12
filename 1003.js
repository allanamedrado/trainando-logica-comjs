const input = require('fs').readFileSync('../uri/stdin', 'utf8');
const lines = input.split(' ');

//soma simples

//desestruturando array
const [x,y] = lines

//transformando a string em numero com o metodo Number()
const soma = Number(x)+Number(y)

console.log("SOMA = " + Number(soma))