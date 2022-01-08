const express = require('express');
const router = express.Router();
const { Aluno } = require('../models');

router.get('/', async (req, res) => {
    const alunos = await Aluno.findAll();
    res.json(alunos);
})

router.get('/2019', async (req, res) => {
    const alunos = await Aluno.findAll({
        where: {ano_matricula: 2019}
    });
    res.json(alunos);
})

router.get('/ultimos', async (req, res) => {
    const alunos = await Aluno.findAll({
        order: [
            ['nome', 'DESC'],
        ],
        limit: 2
    });
    res.json(alunos);
})

router.get('/alunos/:id', async (req, res) => {
    const {id} = req.params;
    //const aluno = await Aluno.findByPk(id);
    const aluno = await Aluno.findOne({ where: {id: id} })
    res.json(aluno)
}) //exemplo

module.exports = router;