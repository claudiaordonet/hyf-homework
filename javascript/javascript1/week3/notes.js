const notes = [];

function saveNote(content, id) {
  notes.push({ content, id });
}

saveNote("pick up groceries", 1);
saveNote("Do laundry", 2);

console.log(notes);

//get note

function getNote(id) {
  for (let info of notes) {
    if (id === info.id);
    {
      return info.content;
    }
  }
  return "error";
}

const firstNote = getNote(1);
console.log(firstNote);

console.log(notes);

//log out notes

function logOutNotesFormatted(id) {
  for (let element of notes) {
    {
      console.log(
        `The note with id: ${notes.id}, has the following note text: ${notes.content}.`
      );
    }
  }
}

logOutNotesFormatted(0); // i dont know what it returns undentify

/* Unique feature */
function cheers() {
  if (notes.content === true);
  {
    console.log("great");
  }
}

cheers(true);
