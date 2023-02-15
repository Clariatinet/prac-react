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
      {isActive ? '해야할 것🔥' : '완료한 것✅'}
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
                {isActive ? '완료' : '취소'}
              </button>
              <button
                onClick={() => {
                  return dispatch(removeTodo(item.id));
                }}
              >
                삭제
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default TodoList;
