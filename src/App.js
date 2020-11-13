import React, { useState } from "react";
import Content from "./components/Content";
import { TodoFunctions, TodoValues } from "./context";
import { filterTodo, changeTodo, addNewTodo } from "./hooks";

const todosList = [
  { id: 1, title: "Title 1", completed: false, notes: [] },
  { id: 2, title: "Title 2", completed: false, notes: [] },
  { id: 3, title: "Title 3", completed: false, notes: [] },
];
function App() {
  const [todos, setTodos] = useState(todosList);
  const [todoValue, setTodoValue] = useState("");
  const changeTodoValue = (value) => setTodoValue(value);
  const changeTodoState = (id, state) => setTodos(changeTodo(todos, id, state));
  const removeTodo = (id) => setTodos(filterTodo(todos, id));
  const addTodo = (value) => {
    setTodos(addNewTodo(todos, value));
    setTodoValue("");
  };
  return (
    <TodoFunctions.Provider
      value={{ changeTodoValue, removeTodo, changeTodoState, addTodo }}
    >
      <TodoValues.Provider
        value={{
          todos,
          todoValue,
        }}
      >
        <Content />
      </TodoValues.Provider>
    </TodoFunctions.Provider>
  );
}

export default App;
