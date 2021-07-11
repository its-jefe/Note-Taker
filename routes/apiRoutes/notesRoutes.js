const router = require('express').Router();
const { notes } = require('../../db/notes');

// notes are available at api/notes in JSON 
router.get('/notes', (req, res) => {
  let results = notes;
  res.json(results);
});

module.exports = router;