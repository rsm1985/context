import React, { useCallback, useContext, memo } from "react";
import { TodoFunctions } from "../context";
function Todo({ todo }) {
  const { id, title, completed } = todo;
  const { removeTodo, changeTodoState } = useContext(TodoFunctions);
  const memoChangeState = useCallback(
    (id, completed) => {
      changeTodoState(id, completed);
    },
    [changeTodoState]
  );
  const memoRemoveTodo = useCallback(
    (id) => {
      removeTodo(id);
    },
    [removeTodo]
  );
  console.log("todo", todo.id);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 20,
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
              memoChangeState(id, e.target.checked);
            }}
          />
          <div style={{ marginLeft: 20 }}>{title}</div>
        </div>
      </div>

      <div onClick={() => memoRemoveTodo(id)}>delete</div>
    </div>
  );
}
export default memo(Todo);
