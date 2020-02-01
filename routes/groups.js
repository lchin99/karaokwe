const express = require('express');
let router = express.Router();

/* POST group. */
router.post('/', function (req, res, next) {
  let id = createId();
  async
  res.send(`${id}`);
});

function createId() {

}

module.exports = router;
