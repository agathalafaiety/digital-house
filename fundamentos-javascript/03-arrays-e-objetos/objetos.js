let carro = {
    nome : "fox",
    ano : 2012,
    ligar : function(){
        console.log("O carro " + this.nome + " esta ligado")
    }
}

carro.ligar()

function Carro(nomeCarro, anoCarro){
    this.nome = nomeCarro
    this.ano = anoCarro
}

let civic = new Carro("Civic", "2019");
console.log(civic);

let gol = new Carro("Gol", "2017");
console.log(gol);


//console.log("O carro é: " + carro.nome + " e seu ano é: " + carro.ano)