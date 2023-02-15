import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = [
  {
    title: '제목1',
    contents: '내용1',
    id: uuidv4(),
    isDone: false,
  },
  {
    title: '제목2',
    contents: '내용2',
    id: uuidv4(),
    isDone: true,
  },
  {
    title: '제목3',
    contents: '내용3',
    id: uuidv4(),
    isDone: false,
  },
];

const todosSlice = createSlice({
  name: 'todosSlice',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      return [...state, action.payload];
    },
    removeTodo: (state, action) => {
      return [...state.filter((item) => item.id !== action.payload)];
    },
    switchTodo: (state, action) => {
      return state.map((item) => {
        if (item.id === action.payload) {
          return { ...item, isDone: !item.isDone };
        } else {
          return item;
        }
      });
    },
  },
});

export const { addTodo, removeTodo, switchTodo } = todosSlice.actions;

export default todosSlice.reducer;
