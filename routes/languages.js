var express = require('express');
var router = express.Router();
const song = require('../models/song');
const language = require('../models/language');
const hasLanguage = require('../models/hasLanguage');

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

/* GET all songs under the requested languages */
router.get('/', function (req, res) {
    language.findAll({
        include: [{ model: song, attributes: ['song_id', 'song', 'artist', 'year', 'explicit'] }],
        where: {
            language_name: req.query.languages
        }
    }).then(function (songs) {
        res.json(songs)
    });
});

module.exports = router;