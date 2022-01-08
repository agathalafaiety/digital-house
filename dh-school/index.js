const express = require('express');
const app = express();
const alunosRouter = require('./routes/alunos');
const areasRouter = require('./routes/areas');
const cursosRouter = require('./routes/cursos');
const professoresRouter = require('./routes/professores'); 
const turmasRouter = require('./routes/turmas');

app.use(express.json())

app.get('/', (req, res) => res.send('Hello'))


app.use('/alunos', alunosRouter);
app.use('/areas', areasRouter);
app.use('/cursos', cursosRouter)
app.use('/professores', professoresRouter);
app.use('/turmas', turmasRouter);

app.listen('3000', () => console.log('Rodando...'))