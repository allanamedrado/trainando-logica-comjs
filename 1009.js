const input = require('fs').readFileSync('../uri/stdin', 'utf8');
const lines = input.split(' ');

const [a,b,c] = lines

const salesWithPorcent = Number(c)*0.15

const salaryWithPercentApply = Number(b) + salesWithPorcent

console.log("TOTAL = R$ " +salaryWithPercentApply.toFixed(2))