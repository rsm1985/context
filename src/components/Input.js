import React, { memo, useContext, useCallback } from "react";
import { TodoFunctions, TodoValues } from "./../context";
import Button from "./Button";

function Input() {
  const { changeTodoValue, addTodo } = useContext(TodoFunctions);
  const { todoValue } = useContext(TodoValues);
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
