const express = require('express');
const rotasProdutos = require('./routers/rotasProduto')
const app = express();

app.get('/', (req, res) => {
    res.send("Olá, Mundo!");
});

app.get('/contatos', (req, res) => res.send({nome : "agatha", idade : 17}) )

app.use('/produtos', rotasProdutos)

//criandor um servidor 
app.listen(3000, () => 
    console.log('Servidor Rodando')
);