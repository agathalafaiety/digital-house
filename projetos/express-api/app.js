const express = require('express');
const rotasProdutos = require('./routers/rotasProduto')
const app = express();
const port = Number(process.env.PORT || 3000);

app.get('/', (req, res) => {
    res.send("Olá, Mundo!");
});

app.get('/contatos', (req, res) => res.send({nome : "agatha", idade : 17}) )

app.use('/produtos', rotasProdutos)

//criandor um servidor 
app.listen(port, () =>
    console.log(`Servidor rodando na porta ${port}`)
);
