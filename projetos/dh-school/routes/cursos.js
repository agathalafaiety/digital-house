const express = require('express');
const router = express.Router();
const { Curso }  = require('../models');
const { Area } = require('../models');

router.get('/', async (req, res) => {
    const cursos = await Curso.findAll({
        include: {
            model: Area,
            as: 'area'
        }
    });
    res.json(cursos);
})

module.exports = router