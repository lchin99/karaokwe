var express = require('express');
var router = express.Router();
const song = require('../models/song');
const Sequelize = require('sequelize');
const operator = Sequelize.Op;

/* GET all songs between the requested years */
router.get('/years', function (req, res) {
    song.findAll({
        where: {
            year: {
                [operator.between]: req.query.years
            }
        }
    }).then(function (songs) {
        res.json(songs)
    });
});

module.exports = router;