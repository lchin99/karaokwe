var express = require('express');
var router = express.Router();
const user = require('../models/user');
const group = require('../models/group');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send(req.body);
});

/* POST user with group external id. */
router.post('/', async function (req, res) {
  let body = req.body;
  try {
    let theGroup = await group.findOne({ where: { external_id: req.body.groupId } });
    let createdUser = await user.create({ name: body.name, id_group: theGroup.id_group });
    res.send(createdUser);
  } catch (err) {
    console.log(err);
  }
})

module.exports = router;
