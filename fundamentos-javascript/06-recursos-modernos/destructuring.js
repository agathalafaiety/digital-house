let pessoa = {
    nome : "Agatha",
    altura : 1.55
}

const {nome, altura} = pessoa;
console.log(altura);

// desestruração com array
let listaCompras = ["pão", "leite", "açucar"];
const [item1, item2, item3] = listaCompras;
console.log(item2);