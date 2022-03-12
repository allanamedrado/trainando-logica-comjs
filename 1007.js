const input = require('fs').readFileSync('../uri/stdin', 'utf8');
const lines = input.split(' ');

const [a,b,c,d] = lines

const diferenca = (a*b)-(c*d)

console.log("DIFERENCA = " + diferenca)
