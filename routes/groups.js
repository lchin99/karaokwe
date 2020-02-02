const express = require('express');
const group = require('../models/group');
let router = express.Router();

router.get('/', function (req, res, next) {
  group.findOne({ where: { external_id: req.body.groupId } }).then((group) => {
    res.send(group)
  });
})

/* POST group. */
router.post('/', function (req, res, next) {
  id = createId();
  group.create({
    external_id: id
  }).then(() => {
    res.send({ id });
  })
});

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

module.exports = router;
