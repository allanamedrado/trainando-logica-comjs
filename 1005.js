const input = require('fs').readFileSync('../uri/stdin', 'utf8');
const lines = input.split(' ');

const [x, y] = lines

//media 

const somaNotasComPesoAplicado = (Number(x)*3.5) + (Number(y) * 7.5)
const media = somaNotasComPesoAplicado/11

console.log("MEDIA = " + media.toFixed(5))