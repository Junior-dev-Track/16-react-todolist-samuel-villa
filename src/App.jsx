import { useState } from 'react'
import { useImmer } from 'use-immer'
import './App.css'
import './scss/style.scss'
import { Header } from './components/Header.jsx'
import { TaskForm } from './components/TaskForm.jsx'
import { Filter } from './components/Filter.jsx'
import { DeleteAll } from './components/DeleteAll.jsx'


const LSKEY = "SamDoesStuff";


function App() {

  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem(LSKEY + ".todos");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return []
    }
  });
  const [filter, setFilter] = useState('all');
  const [filterCount, setFilterCount] = useState(0);

  return (
    <>
    <Header />
    <TaskForm todos={ todos } setTodos={ setTodos } filter={ filter } setFilterCount={ setFilterCount } LSKEY={ LSKEY }/>
    <div className='filter-delete-all'>
      <Filter setFilter={ setFilter } filterCount={ filterCount } />
      <DeleteAll todos={ todos } setTodos={ setTodos } />
    </div>
    </>
  )
}

export default App
