import React, { useState, useEffect } from "react";
import { useImmer } from 'use-immer';


export function TaskForm() {

  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [nextId, setNextId] = useState(0);

  useEffect(() => {
    // localStorage sync
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);


  const updateLocalStorage = (todos) => {
    const newTodos = todos
    localStorage.clear()
    localStorage.setItem('todos', JSON.stringify(newTodos));
  }


  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = (event) => {
    event.preventDefault();
    if (inputValue.trim() !== '') {
      const newTodo = {
        id: nextId,
        title: inputValue,
        done: false
      };
      setTodos([...todos, newTodo]);
      setInputValue('');

      const newId = newTodo.id + 1;
      setNextId(newId)
      const todoList = [...todos]
      updateLocalStorage(todoList)
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
    updateLocalStorage(newTodos)
  };

  const handleDeleteTodo = (id) => {
    const todoToDelete = todos.find(todo => todo.id === id);

    if (todoToDelete?.done) {
      const newTodos = todos.filter(todo => todo.id !== id);
      setTodos(newTodos);
      updateLocalStorage(newTodos);
    }
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
              onChange={() => handleCheck(todo.id)} />
            <label htmlFor={todo.id}>{todo.title}</label>
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </section>
  );
}

