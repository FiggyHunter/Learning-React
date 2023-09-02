import Split from "react-split";
import Editor from "./components/Editor";
import Sidebar from "./components/Sidebar";
import { useEffect, useState } from "react";
import { onSnapshot, addDoc, doc, deleteDoc, setDoc } from "firebase/firestore";
import { notesCollection, db } from "../firebase.ts";

export default function App() {
  const [notes, setNotes] = useState([]);
  const [currentNoteId, setCurrentNoteId] = useState("");
  const [tempNote, setTempNote] = useState("");

  const sortedNotes = notes.sort((a, b) => {
    const timestampA = new Date(a.updatedAt);
    const timestampB = new Date(b.updatedAt);

    // Use the '>' operator to sort in descending order
    if (timestampA > timestampB) return -1;
    if (timestampA < timestampB) return 1;

    return 0; // If timestamps are equal
  });

  useEffect(() => {
    const unsubscribe = onSnapshot(notesCollection, (snapshot) => {
      // Sync up local notes array with snapshot data

      const notesArr = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setNotes(notesArr);
    });
    return unsubscribe;
  }, []);

  // useEffect(() => {
  //   setCurrentNoteId(notes[0].id);
  // }, [notes.length]);

  useEffect(() => {
    if (!currentNoteId) {
      setCurrentNoteId(notes[0]?.id);
    }
  }, [notes]);
  let currentNote =
    notes.find((note) => note?.id === currentNoteId) || notes[0];

  async function createNewNote() {
    const newNote = {
      body: "# Type your markdown note's title here",
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };
    const newNoteRef = await addDoc(notesCollection, newNote);
    setCurrentNoteId(newNoteRef.id);
  }

  async function updateNote(text) {
    const docRef = doc(db, "notes", currentNoteId);
    await setDoc(
      docRef,
      { body: text, updatedAt: Date.now() },
      { merge: true }
    );
  }

  async function deleteNote(noteId) {
    const docRef = doc(db, "notes", noteId);
    await deleteDoc(docRef);
    setCurrentNoteId(notes[0]?.id);
  }

  return (
    <main>
      {notes.length > 0 ? (
        <Split sizes={[30, 70]} direction="horizontal" className="split">
          <Sidebar
            notes={sortedNotes}
            currentNote={currentNote}
            setCurrentNoteId={setCurrentNoteId}
            newNote={createNewNote}
            deleteNote={deleteNote}
          />
          <Editor currentNote={currentNote} updateNote={updateNote} />
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
