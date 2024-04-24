import React, { useState, useEffect } from "react";
import { useImmer } from 'use-immer';


export function TaskForm({ todos, setTodos, filter, setFilterCount, LSKEY }) {

  const [inputValue, setInputValue] = useState('');
  const [nextId, setNextId] = useState(() => {
    if (todos.length > 0) {
      console.log(todos.length);
      return Math.max(...todos.map(todo => todo.id)) + 1;
    } else {
      return 0;
    }
  })


  useEffect(() => {
    if (todos) {
      localStorage.setItem(LSKEY + ".todos", JSON.stringify(todos));
    }
  }, [todos]);

  useEffect(() => {
    setFilterCount(filteredTodos.length)
  });

  const filteredTodos = todos.filter(todo => {
    if (filter === 'all') return true;
    if (filter === 'done') return todo.done;
    if (filter === 'todo') return !todo.done;
    return true;
  })

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
      const newTodos = [...todos, newTodo]
      setTodos(newTodos);
      setInputValue('');
      setNextId(nextId + 1);
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
  };

  const handleDeleteTodo = (id) => {
    const todoToDelete = todos.find(todo => todo.id === id);

    if (todoToDelete?.done) {
      const newTodos = todos.filter(todo => todo.id !== id);
      setTodos(newTodos);
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
        {filteredTodos.map(todo => (
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

