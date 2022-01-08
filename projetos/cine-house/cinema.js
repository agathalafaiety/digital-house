var filmes = require("./database/catalogo.json");

var cinema = "CineHouse";
var slogan = "O melhor cinema da região";

console.log(cinema + " // " + slogan);

//var filmes = [
//  {
//  codigo: 1,
//  titulo: "Luca",
//  duracao: 1.3,
//  atores: ["Kalebe", "Gioavanna", "Leonardo"],
//  anoLancamento: 2021,
//  emCartaz: true,
//},
//];
// [] == arrays
// {} == objeto

// var nomeDeFilmes = ['Luca', 'Moana', 'Mulan', 'Rei Leão', 'Cruella']

// filmes[x].emCartaz = true || false

function adicionarFilme(
  codigo,
  titulo,
  duracao,
  atores,
  anoLancamento,
  emCartaz
) {
  filmes.push({
    codigo: codigo,
    titulo: titulo,
    duracao: duracao,
    atores: atores,
    anoLancamento: anoLancamento,
    emCartaz: emCartaz,
  });
}

function buscarFilme(codigo) {
  const filmeEncontrado = filmes.find((filme) => filme.codigo == codigo);
  // const filmeEncontrado = filmes.find(
  //     function(filme) {
  //         return filme.codigo == codigo
  //     }
  // )
  console.log('O filme encontrado foi "' + filmeEncontrado.titulo + '"');
}

function alterarStatusEmCartaz(codigo) {
  const filmeEncontrado = filmes.find((filme) => filme.codigo == codigo);
  filmeEncontrado.emCartaz = !filmeEncontrado.emCartaz;
  // const posicao = filmes.indexOf(filmeEncontrado)
  // filmes[posicao].emCartaz = !filmes[posicao].emCartaz
}

// // adicionando filmes
adicionarFilme(
  2,
  "Raya e o Último Dragão",
  2,
  ["Gemma", "Sandra", "Alan"],
  2021,
  true
);
adicionarFilme(
  3,
  "Coração de Dragão",
  2,
  ["Gemma", "Sandra", "Alan"],
  2021,
  true
);

// Lista filmes
console.log("Lista de filmes");
console.log("--------------");
console.log(filmes);

/// buscar filmes
// console.log('Buscar filme')
// console.log('--------------')
// buscarFilme(3)

// /// alterar o stats de um filme
console.log("Alterar filme em cartaz");
console.log("--------------");
alterarStatusEmCartaz(3);

console.log(filmes);
