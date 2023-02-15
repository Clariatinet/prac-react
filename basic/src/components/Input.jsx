import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/modules/todosSlice';
import { v4 as uuidv4 } from 'uuid';

const Input = () => {
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');
  const dispatch = useDispatch();
  return (
    <div>
      <input
        value={title}
        onChange={(event) => {
          return setTitle(event.target.value);
        }}
        type='text'
      />
      <input
        value={contents}
        onChange={(event) => {
          return setContents(event.target.value);
        }}
        type='text'
      />
      <button
        onClick={() => {
          const newTodo = {
            title,
            contents,
            isDone: false,
            id: uuidv4(),
          };
          return dispatch(addTodo(newTodo));
        }}
      >
        추가
      </button>
    </div>
  );
};

export default Input;
