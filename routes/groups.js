const express = require('express');
const group = require('../models/group');
let router = express.Router();

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
  return '123';
}

module.exports = router;
