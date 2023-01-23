export const toDoReducer = (initialState = [], action) => {
  switch (action.type) {
    case "ABC":
      throw new Error("Action.type = ABC no está implementada");

    case "Add":
      return [...initialState, action.payload];
    case "Remove":
      return initialState.filter((todo) => todo.id !== action.payload);
    case "Toggle":
      return initialState.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            done: !todo.done,
          };
        }
        return todo;
      });
    default:
      return initialState;
  }
};
