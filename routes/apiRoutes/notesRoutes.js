const router = require('express').Router();
const { } = require('../../lib/notes');
const { animals } = require('../../db/notes');

router.get('/notes', (req, res) => {
  let results = animals;
  res.json(results);
});

module.exports = router;