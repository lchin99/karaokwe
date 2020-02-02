const express = require('express');
const group = require('../models/group');
const groupSong = require('../models/groupSong');
const song = require('../models/song');
let router = express.Router();

router.get('/', function (req, res, next) {
  group.findOne({ where: { external_id: req.body.groupId } }).then((group) => {
    res.send(group)
  });
})

/* POST group. */
router.post('/', function (req, res, next) {
  let id = createId();
  group.create({
    external_id: id,
    group_preferences: JSON.stringify(req.query.preferences)
  }).then(() => {
    res.send({ id });
  })
});

/* GET preferences associated with groupId */
router.get('/preferences', async function (req, res) {
  try {
    const group_data = await group.findOne({ where: { external_id: req.query.groupId } });
    const preferences = group_data['group_preferences'];
    res.send(JSON.parse(preferences));
  } catch (error) {
    console.error(error);
  }
})

/* POST group user's song choices */
router.post('/songs', async function (req, res, next) {
  let records = await createGroupSong(req.body.groupId, req.body.songIds);
  groupSong.bulkCreate(records, { updateOnDuplicate: ['count'] }).then((created) => {
    res.send(created);
  });
});

/* GET songs associated with groupId */
router.get('/songs', async function (req, res) {
  try {
    let group = await group.findOne({ where: { external_id: req.query.groupId } });
    let groupSongs = await groupSong.findAll({ where: { group_id: group.group_id } });
    let songIds = [];
    groupSongs.forEach(groupSong => {
      songIds.push(groupSong.song_id);
    })
    let songs = await song.findAll({ where: { song_id: songIds } });
    res.send(songs);
  } catch (error) {
    console.error(error);
  }
})

function createId() {
  const strOptions = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  var ans = '';
  for (var i = 6; i > 0; i--) {
    ans +=
      strOptions[Math.floor(Math.random() * strOptions.length)];
  }
  return ans;
}

async function createGroupSong(groupId, songIds) {
  let records = [];
  try {
    let existingGroup = await group.findOne({ where: { external_id: groupId } });

    for (const songId of songIds) {
      let existingGroupSong = await groupSong.findOne({ where: { group_id: existingGroup.group_id, song_id: songId } });
      if (existingGroupSong) {
        records.push({ group_id: existingGroup.group_id, song_id: songId, count: existingGroupSong.count + 1 });
      } else {
        let newRecord = { group_id: existingGroup.group_id, song_id: songId, count: 1 };
        records.push(newRecord);
      }
    }
    return records;
  } catch (err) {
    console.error(err);
  }
}

module.exports = router;
