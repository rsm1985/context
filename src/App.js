import React, { useState, useEffect, useMemo } from "react";
import Input from "./components/Input";
import List from "./components/List";
import Context from "./context";
import { filterTodo, changeTodo, addTodo } from "./hooks";

const todosList = [
  { id: 1, title: "Title 1", completed: false, notes: [] },
  { id: 2, title: "Title 2", completed: false, notes: [] },
  { id: 3, title: "Title 3", completed: false, notes: [] },
];
function App() {
  const [todos, setTodos] = useState(todosList);
  const [todoValue, setTodoValue] = useState("");

  const addNewTodo = () => {
    setTodos(addTodo(todos, todoValue));
    setTodoValue("");
  };

  const changeTodoState = (id, state) => setTodos(changeTodo(todos, id, state));
  const removeTodo = (id) => setTodos(filterTodo(todos, id));
  const addNote = (todoId, value) => {
    const changedTodos = todos.slice();
    changedTodos.forEach((todo) => {
      if (todo.id === todoId) {
        todo.notes = todo.notes.concat({
          id: Math.floor(Math.random() * 1000),
          value,
        });
      }
    });
    setTodos(changedTodos);
  };
  return (
    <Context.Provider value={{ todos, removeTodo, changeTodoState, addNote }}>
      <div className="App" style={{ margin: "0 auto", width: 500 }}>
        <Input
          value={todoValue}
          setTodoValue={setTodoValue}
          addTodo={addNewTodo}
        />
        <List todos={todos} />
      </div>
    </Context.Provider>
  );
}

export default App;
