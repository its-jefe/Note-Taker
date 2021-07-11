const fs = require('fs');
const path = require('path');

function getNotes(notesArray) {
  const result = notesArray;
  return result;
}

function createNote(body, notesArray) {
  const note = body;
  notesArray.push(note);
  fs.writeFileSync(
    // smart handling - save notes
    path.join(__dirname, '../db/notes.json'),
    JSON.stringify({ notesArray }, null, 2)
  );
  return note;
}

// find note by ID & delete it ;) 
function deleteNote(id) {

}

module.exports = {
  getNotes,
  createNote,
  deleteNote
};