var express = require('express');
var router = express.Router();
const song = require('../models/song');
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

/* GET all songs under the requested types */
router.get('/', function (req, res) {
    type.findAll({
        include: [{ model: song, attributes: ['song_id', 'song', 'artist', 'year', 'explicit'] }],
        where: {
            type_name: req.query.types
        }
    }).then(function (songs) {
        res.json(songs)
    });
});

module.exports = router;