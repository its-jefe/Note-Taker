const fs = require('fs');
const path = require('path');

function createNewNote(body, notesArray) {
  const note = body;
  notesArray.push(note);
  fs.writeFileSync(
    path.join(__dirname, '../db/notes.json'),
    JSON.stringify({ notesArray }, null, 2)
  );
  return note;
}

function deleteNote(id, notesArray) {
  console.log(id)
  console.log(notesArray)

  let cutNotes = notesArray.filter(el => {

    console.log('el')
    console.log(el)

    if (el.id == id) {
      return false
    } else {
      return true
    }

  })

  fs.writeFileSync(
    path.join(__dirname, '../db/notes.json'),
    JSON.stringify({ cutNotes }, null, 2)
  );
  return cutNotes;
}

module.exports = {
  createNewNote,
  deleteNote
};