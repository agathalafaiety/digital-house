const express = require('express')
const app = express();
const port = Number(process.env.PORT || 3333);

app.set('view engine', 'ejs');

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})
