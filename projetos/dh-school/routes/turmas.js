const express = require('express');
const router = express.Router();
const { Turma } = require('../models');
const { Curso } = require('../models');
const { Professor } = require('../models');

router.get('/', async (req, res) => {
    const turmas = await Turma.findAll({
        include: [
            {
                model: Curso,
                as: 'curso'
            },
            {
                model: Professor,
                as: 'professor'
            }
        ]
    })
    res.json(turmas);
}
)

router.get('/anoinicio', async (req, res) => {
    const turmas = await Turma.findAll({
        order: [
            ['ano_inicio', 'ASC'],
        ],
    });
    res.json(turmas);
})

module.exports = router