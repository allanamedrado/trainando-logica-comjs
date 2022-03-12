const input = require('fs').readFileSync('../uri/stdin', 'utf8');
const lines = input.split('\n');

//adequando ao URI
//usando o map para transformar o array lines que retorna um array com 
//duas strings representando o codigo da peca, numero de pecas e o preco de cada peça
//[ '1 1 15.10 \r', '2 1 15.10' ]

const values = lines.map((s) => {
    return s.split(' ')
})
//values retorna dois arrays de string com as infos de cada peça separado
//[ '1', '1', '15.10', '\r' ] [ '2', '1', '15.10' ]


const [infosPieces1, infosPieces2] = values
const [codePieces1, numberOfPieces1, pricePiece1] = infosPieces1
const [codePieces2, numberOfPieces2, pricePiece2] = infosPieces2


const totalToPayPieces1 = Number(numberOfPieces1) * Number(pricePiece1)
const totalToPayPieces2 = Number(numberOfPieces2) * Number(pricePiece2)

const totalPieces = totalToPayPieces1 + totalToPayPieces2

console.log("VALOR A PAGAR: R$ " + totalPieces.toFixed(2))