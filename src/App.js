import { useState } from "react";
import "./App.css";

import { useToDoStore, useNoteStore } from "./store";

function App() {
  const counter = useToDoStore((state) => state.counter);
  const notes = useNoteStore((state) => state.notes);

  const [text, setText] = useState("");

  return (
    <div>
      <div className="wrapper-div">
        <div className="logo-div">MyNotes App</div>
        <div className="main-div">
          <div className="counter-div">
            <button
              className="button-div"
              onClick={useToDoStore((state) => state.decreaseCounter)}
            >
              -
            </button>
          </div>
          <div className="counter-div">
            <h3>{counter}</h3>
          </div>
          <div className="counter-div">
            <button
              className="button-div"
              onClick={useToDoStore((state) => state.increaseCounter)}
            >
              +
            </button>
          </div>
        </div>

        <div className="main-notes-div">
          <div className="input-div">
            <input
              type="text"
              placeholder="Input note"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button onClick={useNoteStore((state) => state.addNotes(text))}>
              Add Note
            </button>
          </div>
          {notes.map((note) => (
            <div className="note-div">{note}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
