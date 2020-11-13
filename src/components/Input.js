import React, { memo, useCallback } from "react";
import Button from "./Button";

function Input({ todoValue, changeTodoValue, addTodo }) {
  const memoChangeTodoValue = useCallback(
    (value) => {
      changeTodoValue(value);
    },
    [changeTodoValue]
  );
  const memoAddTodo = useCallback(
    (value) => {
      addTodo(value);
    },
    [addTodo]
  );
  return (
    <div style={{ display: "flex" }}>
      <input
        type="text"
        value={todoValue}
        style={{ padding: 5, width: 200 }}
        onChange={(e) => memoChangeTodoValue(e.target.value)}
      />
      <div style={{ marginLeft: 20 }}>
        <Button addTodo={memoAddTodo} value={todoValue} />
      </div>
    </div>
  );
}
export default memo(Input);
