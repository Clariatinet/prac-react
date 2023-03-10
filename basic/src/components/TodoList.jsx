import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo, switchTodo } from '../redux/modules/todosSlice';
import { getTodos } from '../api/todos';
import { useQuery } from 'react-query';

const TodoList = ({ isActive }) => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => {
    return state.todosSlice;
  });

  return (
    <div>
      {isActive ? 'ν΄μΌν  κ²π₯' : 'μλ£ν κ²β'}
      {todos
        .filter((item) => {
          return item.isDone !== isActive;
        })
        .map((item) => {
          return (
            <div key={item.id}>
              <h4>{item.title}</h4>
              <p>{item.contents}</p>
              <p>{item.id}</p>
              <button
                onClick={() => {
                  return dispatch(switchTodo(item.id));
                }}
              >
                {isActive ? 'μλ£' : 'μ·¨μ'}
              </button>
              <button
                onClick={() => {
                  return dispatch(removeTodo(item.id));
                }}
              >
                μ­μ 
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default TodoList;
