import React, { useState, useContext, memo } from "react";
import Context from "../context";
function Todo({ todo }) {
  const { id, title, completed, notes } = todo;
  const [note, setNoteValue] = useState("");
  const { removeTodo, changeTodoState, addNote } = useContext(Context);
  console.log("todo", todo.id);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 20,
        border: "1px solid red",
      }}
    >
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <input
            type="checkbox"
            checked={completed}
            onChange={(e) => {
              changeTodoState(id, e.target.checked);
            }}
          />
          <div style={{ marginLeft: 20 }}>{title}</div>
        </div>
        <div>
          <div>
            <input
              type="text"
              value={note}
              onChange={(e) => setNoteValue(e.target.value)}
            />
            <button onClick={() => addNote(id, note)}>Add note</button>
          </div>
          Notes:
          {notes.map((n) => (
            <div key={n.id}>{n.value}</div>
          ))}
        </div>
      </div>

      <div onClick={() => removeTodo(id)}>delete</div>
    </div>
  );
}
export default memo(Todo, (prevProps, nextProps) => {
  // evaluate whether the props have changed and if
  // the component should update
  return false;
});
