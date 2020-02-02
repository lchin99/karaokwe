var express = require('express');
var router = express.Router();
const Sequelize = require('sequelize');
const operator = Sequelize.Op;
const song = require('../models/song');
const language = require('../models/language');
const hasLanguage = require('../models/hasLanguage');
const type = require('../models/type');
const hasType = require('../models/hasType');

song.belongsToMany(type, {
    through: hasType, foreignKey: {
        name: 'song_id',
        field: 'song_id'
    }
});

type.belongsToMany(song, {
    through: hasType, foreignKey: {
        name: 'type_id',
        field: 'type_id'
    }
});

song.belongsToMany(language, {
    through: hasLanguage, foreignKey: {
        name: 'song_id',
        field: 'song_id'
    }
});

language.belongsToMany(song, {
    through: hasLanguage, foreignKey: {
        name: 'language_id',
        field: 'language_id'
    }
});

/* GET all songs for ALL the requested parameters */
router.get('/', function (req, res) {
    const whereAttributes = {}
    if (req.query.languages) {
        whereAttributes['$languages.language_name$'] = req.query.languages;
    }
    if (req.query.types) {
        whereAttributes['$types.type_name$'] = req.query.types;
    }
    if (req.query.years) {
        whereAttributes.year = { [operator.between]: req.query.years }
    }

    song.findAll({
        include: [
            { model: language, attributes: ['language_id', 'language_name'] },
            { model: type, attributes: ['type_id', 'type_name'] }
        ],
        where: whereAttributes
    }).then(function (songs) {
        res.json(songs)
    });
});

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