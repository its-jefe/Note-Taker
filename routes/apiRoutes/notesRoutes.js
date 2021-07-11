const router = require('express').Router();
const { createNewNote } = require('../../lib/notes');
const { notes } = require('../../db/notes');

// notes are available at api/notes in JSON 
router.get('/notes', (req, res) => {
  let results = notes;
  res.json(results);
});

router.post('/notes', (req, res) => {
  // set id based on what the next index of the array will be
  req.body.id = notes.length.toString();

  const note = createNewNote(req.body, notes);
  res.json(note);
});

// // Route parameters :👌 
// router.delete('/notes/:id', (req, res) => {
//   const note = deleteNote(req.body.id, notes); // pass ID / index
//   res.json(note);
// });

module.exports = router;