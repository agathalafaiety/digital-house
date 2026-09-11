let numerosPares = [2, 4, 6, 8, 10];

//map
let numerosParesDobro = numerosPares.map(function(valor){
   return valor * 2
})

console.log(numerosParesDobro);

//filter
let numerosFiltrados = numerosPares.filter(function(valor){
    return valor < 6
})

console.log(numerosFiltrados);

//reduce 
let somaPares = numerosPares.reduce(function(acm, valor){
    return acm + valor
})

console.log(somaPares);

//forEach 
numerosPares.forEach(function(valor, indice){
    console.log("O indice " + indice + " tem o valor: " + valor)
})

