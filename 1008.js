const input = require('fs').readFileSync('../uri/stdin', 'utf8');
const lines = input.split(' ');

const [a,b,c] = lines

//salario calculado pela quantidade de horas trabalhadas pelo custo da sua hora
const salary = b*c

console.log("NUMBER = " + a)
console.log("SALARY = U$ " + salary.toFixed(2))