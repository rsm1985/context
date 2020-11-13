export const filterTodo = (todosList, id) =>
  todosList.filter((t) => t.id !== id);

export const changeTodo = (todosList, id, state) =>
  todosList.map((t) => {
    if (t.id === id) {
      t.completed = state;
    }
    return t;
  });

export const addNewTodo = (todos, value) =>
  todos.concat({
    id: Math.floor(Math.random() * 1000),
    title: value,
    completed: false,
    notes: [],
  });
