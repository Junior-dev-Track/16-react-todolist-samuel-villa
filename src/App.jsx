import { useState } from 'react'
import { useImmer } from 'use-immer'
import './App.css'
import './scss/style.scss'
import Header from './components/Header'
import { TaskForm } from './components/TaskForm.jsx'
import { Filter } from './components/Filter.jsx'

function App() {

  const [filter, setFilter] = useState('all');
  const [filterCount, setFilterCount] = useState(0);

  return (
    <>
    <Header />
    <TaskForm filter={ filter } setFilterCount={ setFilterCount } />
    <Filter setFilter={ setFilter } filterCount={ filterCount } />
    </>
  )
}

export default App
