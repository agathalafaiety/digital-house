const express = require('express');
const router = express.Router();
const { Area } = require('../models');
const {Curso }  = require('../models');

router.get('/', async (req, res) => {
    const areas = await Area.findAll({
        include: {
            model: Curso,
            as: 'cursos'
        }
    });
    res.json(areas);
})

router.get('/alfabetica', async (req, res) => {
    const areas = await Area.findAll({
        order: [
            ['nome', 'ASC'],
        ]
    });
    res.json(areas);
})

module.exports = router;