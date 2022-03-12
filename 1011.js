const input = require('fs').readFileSync('../uri/stdin', 'utf8');
const lines = input.split('\n');

const [r] = lines
const pi = 3.14159

const volume = (4/3) * pi * (r*r*r)

console.log("VOLUME = " + volume.toFixed(3))