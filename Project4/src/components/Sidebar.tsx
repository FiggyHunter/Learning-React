export default function Sidebar(props) {
  function getNoteTitle(text) {
    const indexOfNewline = text.indexOf("\n");

    const slicedText = text.slice(0, indexOfNewline);
    return slicedText;
  }

  const noteElements = props.notes.map((note, index) => (
    <div key={note.id}>
      <div
        className={`title ${
          note.id === props.currentNote.id ? "selected-note" : ""
        }`}
        onClick={() => props.setCurrentNoteId(note.id)}
      >
        <h4 className="text-snippet">{getNoteTitle(note.body)}</h4>{" "}
        <button
          className="delete-btn"
          onClick={(e) => props.deleteNote(e, note.id)}
        >
          <i className="gg-trash trash-icon"></i>
        </button>
      </div>
    </div>
  ));

  return (
    <section className="pane sidebar">
      <div className="sidebar--header">
        <h3>Notes</h3>
        <button className="new-note" onClick={props.newNote}>
          +
        </button>
      </div>
      {noteElements}
    </section>
  );
}
