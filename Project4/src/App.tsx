import Split from "react-split";
import { nanoid } from "nanoid";
import Editor from "./components/Editor";
import Sidebar from "./components/Sidebar";
import { useEffect, useState } from "react";

export default function App() {
  const [notes, setNotes] = useState(
    () => JSON.parse(localStorage.getItem("notes")) || []
  );
  const [currentNoteId, setCurrentNoteId] = useState(notes[0]?.id || "");
  useEffect(() => {
    if (localStorage.getItem("notes"))
      setNotes(JSON.parse(localStorage.getItem("notes")));
  }, []);

  useEffect(() => {
    if (notes.length === 0) return;
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const currentNote =
    notes.find((note) => note.id === currentNoteId) || notes[0];

  function createNewNote() {
    const newNote = {
      id: nanoid(),
      body: "# Type your markdown note's title here",
    };
    setNotes((prevNotes) => [newNote, ...prevNotes]);
    setCurrentNoteId(newNote.id);
  }

  function updateNote(text) {
    setNotes((oldNotes) => {
      const arrayWithEdittedNote = oldNotes.map((oldNote) => {
        return oldNote.id === currentNoteId
          ? { ...oldNote, body: text }
          : oldNote;
      });
      const recentNote = arrayWithEdittedNote.find(
        (note) => note.id === currentNoteId
      );
      const modifiedNotes = arrayWithEdittedNote.filter(
        (note) => note.id !== currentNoteId
      );
      return [recentNote, ...modifiedNotes];
    });
  }

  function deleteNote(event, noteId) {
    event.stopPropagation();
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== noteId));
  }

  return (
    <main>
      {notes.length > 0 ? (
        <Split sizes={[30, 70]} direction="horizontal" className="split">
          <Sidebar
            notes={notes}
            currentNote={currentNote}
            setCurrentNoteId={setCurrentNoteId}
            newNote={createNewNote}
            deleteNote={deleteNote}
          />
          {currentNoteId && notes.length > 0 && (
            <Editor currentNote={currentNote} updateNote={updateNote} />
          )}
        </Split>
      ) : (
        <div className="no-notes">
          <h1>You have no notes</h1>
          <button className="first-note" onClick={createNewNote}>
            Create one now
          </button>
        </div>
      )}
    </main>
  );
}
