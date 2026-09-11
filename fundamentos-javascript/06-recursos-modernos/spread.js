//com array
let frutas = ["maça", "banana", "uva"];

let frutasDois = ["laranja", "abacate", "goiaba"];

let listaCompleta = [...frutas, ...frutasDois];

console.log(listaCompleta);

//com objeto
let pessoa = {
    nome : "agatha",
    idade : 17
}

let infoPessoal = {
    tel : "123456789",
    rg : 1111111111,
    ...pessoa
}

let pessoaCompleta = {
    endereco : "Rua dos bobos",
    ...infoPessoal
}
console.log(pessoaCompleta)

function letras(...params){
    console.log(params)
}

letras("a", "b")