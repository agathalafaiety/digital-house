const express = require('express');
const router = express.Router();
const {Professor } = require('../models');

router.get('/', async (req, res) => {
    const professores = await Professor.findAll();
    res.json(professores);
})

router.get('/:id', async (req, res) => {
    const {id} = req.params;
    //const professores = await Aluno.findByPk(id);
    const professores = await Professor.findOne({ where: { id: id} })
    res.json(professores);
})

module.exports = router;