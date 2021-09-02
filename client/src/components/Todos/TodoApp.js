import React, { useEffect, useState } from 'react';
import TodoForm from './TodoForm';

export default function TodoApp() {
  const [todo, setTodo] = useState({ title: '', completed: false });
  const [allTodos, setAllTodos] = useState([]);

  const handleInput = (title) => {
    setTodo({ ...todo, title })
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setAllTodos(...allTodos, todo);
    setTodo({ title: '', completed: false });
  }

  useEffect(() => console.log(todo));
  
  useEffect(() => console.log(allTodos));
  return(
    <div className='mx-auto'>
      <TodoForm todo={todo} handleInput={handleInput} handleSubmit={handleSubmit}/>
    </div>
  )
}