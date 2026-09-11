//modo declarativo
let numero = 32;

function somar(a,b){
    //codigo 
    console.log("estou somando...");
    return a + b;
}

let resulSoma = somar(1,2);
console.log(resulSoma);

//modo expressão
const multiplicar = function(a,b) {
    //codigo
    console.log("estou multiplicando...");
    return a * b;
}

console.log(multiplicar(2,10));
