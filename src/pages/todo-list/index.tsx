import React, { useState } from 'react';
import './index.css';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo } from '../../store/todo-list/reducers';
import TodoItem from './components/todoItem';
import { v4 as uuidv4 } from 'uuid';

const TodoList = () => {
  const dispatch = useDispatch();

  const [value, setValue] = useState('');
  const count = useSelector((state: any) => state.todo.count);
  const todos = useSelector((state: any) => state.todo.todos);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const todo = {
      id: uuidv4(),
      text: value,
    };
    dispatch(addTodo(todo));
    setValue('');
    setTimeout(() => {
      dispatch(removeTodo(todo.id));
    }, 5000);
  };

  return (
    <div className='todolist'>
      <div className='todolist-add'>
        <form className='App-form' onSubmit={handleSubmit}>
          <input type='text' value={value} onInput={(e: any) => setValue(e.target.value)} />
          <button type='submit'>+</button>
        </form>
      </div>
      <div className='list-todo'>
        {count > 0 &&
          todos.map((todo: { id: string; text: string }) => (
            <TodoItem key={todo.id} text={todo.text} />
          ))}
        {count === 0 && <p>No todos</p>}
      </div>
    </div>
  );
};

export default TodoList;
