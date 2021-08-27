const CHANGE_INPUT = 'todos/CHANGE_INPUT';
const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';

let id = 3;

export const changeInput = (inputText) => ({ type: CHANGE_INPUT, inputText });
export const insert = (text) => ({
  type: INSERT,
  todo: { id: id++, text, done: false },
});
export const toggle = (id) => ({ type: TOGGLE, id });
export const remove = (id) => ({ type: REMOVE, id });

const initialState = {
  inputText: '',
  todos: [
    { id: 1, text: 'Eat Breakfast', done: true },
    { id: 2, text: 'Eat Lunch', done: false },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_INPUT:
      return { ...state, inputText: action.inputText };
    case INSERT:
      return { ...state, todos: [...state.todos, action.todo] };
    case TOGGLE:
      const newTodos = state.todos.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo,
      );
      return { ...state, todos: newTodos };
    case REMOVE:
      const filteredTodos = state.todos.filter((todo) => todo.id !== action.id);
      return { ...state, todos: filteredTodos };
    default:
      return state;
  }
};

export default reducer;
