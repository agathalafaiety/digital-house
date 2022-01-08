const data = new Date();

console.log(data);

//retorna o numero do dia do mes de uma data
console.log(data.getDate());

//retorna o dia da semana de uma data 0 (domingo) 6 (sabado)
console.log(data.getDay());

//retorna o numero do mes de uma data 0 (janeiro) 11(dezembro)
console.log(data.getMonth());

//retorna o ano completo
console.log(data.getFullYear());

let meuAniver = new Date(2004, 0, 26)
console.log(meuAniver)