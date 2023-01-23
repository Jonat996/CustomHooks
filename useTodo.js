import React, { useEffect, useReducer } from "react";
import { toDoReducer } from "../08-useReducer/todoReducer";

export const useTodo = () => {
  const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  };

  const [todos, dispatch] = useReducer(toDoReducer, [], init);

  const handleNewToDo = (todo) => {
    const action = {
      type: "Add",
      payload: todo,
    };
    dispatch(action);
  };
  const handleDeleteToDo = (id) => {
    dispatch({
      type: "Remove",
      payload: id,
    });
  };
  const handleToggleTodo = (id) => {
    dispatch({
      type: "Toggle",
      payload: id,
    });
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return {
    todos,
    todosCount: todos.length,
    pendingTodosCount: todos.filter((t) => !t.done).length,
    handleNewToDo,
    handleToggleTodo,
    handleDeleteToDo,
  };
};
