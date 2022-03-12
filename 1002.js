//uso de constantes pois as variaveis nao se alteram apos a execução do programa
const input = require('fs').readFileSync('../uri/stdin', 'utf8');

//o metodo split transforma uma string em um array dividindo ela pelo parametro passado

const lines = input.split('\n');

//desestruturando o vetor 

const [x] =lines

//formula area = n.raio²

const n = 3.14159

const area = n*(x*x)

//metodo toFixed formata um numero utilizando o ponto fixo, entao depois do ponto
// o numero sera arredondado e poderá incluir zeros ou não após o ponto

console.log("A=" + area.toFixed(4))