const input = require('fs').readFileSync('../uri/stdin', 'utf8');
const lines = input.split(' ');

const [a,b,c] = lines
const pi = 3.14159

const areaTriangulo = (Number(a)*Number(c))/2
const areaCirculo = pi * (Number(c)*Number(c))
const areaTrapezio = ((Number(a)+Number(b))*Number(c))/2
const areaQuadrado = Number(b)*Number(b)
const areaRetangulo = Number(a)*Number(b)

console.log("TRIANGULO: " + areaTriangulo.toFixed(3))
console.log("CIRCULO: " + areaCirculo.toFixed(3))
console.log("TRAPEZIO: " + areaTrapezio.toFixed(3))
console.log("QUADRADO: " + areaQuadrado.toFixed(3))
console.log("RETANGULO: " + areaRetangulo.toFixed(3))
