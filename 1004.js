const input = require('fs').readFileSync('../uri/stdin', 'utf8');
const lines = input.split(' ');

//produto simples

const [x, y] = lines

const prod = Number(x)*Number(y)

console.log("PROD = " + prod)
