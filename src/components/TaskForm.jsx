import React, { useState } from "react";
import { useImmer } from 'use-immer';


export function TaskForm() {

  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = (event) => {
    event.preventDefault();
    if (inputValue.trim() !== '') {
      const newTodo = {
        id: todos.length - 1,
        title: inputValue,
        done: false
      };
      setTodos([...todos, newTodo]);
      setInputValue('');
    }
  };

  const handleCheck = (id) => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.done = !todo.done
      }
      return todo
    })
    setTodos(newTodos)
  }

  const handleDeleteTodo = (id) => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <section className="formSection">
      <form id="itemsForm" onSubmit={handleAddTodo}>
        <label htmlFor="new-task">Enter New Task</label>
        <input
          id="new-task"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button onClick={handleAddTodo}>Add</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input 
              type="checkbox" 
              id={todo.id}
              name={todo.title} 
              checked={todo.done}
              onChange={() => handleCheck(todo.id)}/>
            {todo.title}
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </section>
  );
}

