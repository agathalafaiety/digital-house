const fs = require('fs'); //nativo
const moment = require('moment'); //instalado
const superHerois = require('./superHeroi'); //criado

let dados = fs.readFileSync(__dirname + '/dados.txt' , 'utf8');
let data = moment().format(' MMM do YY ') 

console.log(data);
console.log(dados);
console.log(superHerois);
