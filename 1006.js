const input = require('fs').readFileSync('../uri/stdin', 'utf8');
const lines = input.split(' ');

const [x, y, z] = lines

const somaDasNotasComPesoAplicado = (Number(x)*2) + (Number(y)*3) + (Number(z)*5)
const media = somaDasNotasComPesoAplicado/10

console.log("MEDIA = " + media.toFixed(1))