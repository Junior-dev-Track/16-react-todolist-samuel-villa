import { useState } from 'react'
import { useImmer } from 'use-immer'
import './App.css'
import './scss/style.scss'
import { Header } from './components/Header.jsx'
import { TaskForm } from './components/TaskForm.jsx'
import { Filter } from './components/Filter.jsx'
import { DeleteAll } from './components/DeleteAll.jsx'


function App() {

  const [filter, setFilter] = useState('all');
  const [filterCount, setFilterCount] = useState(0);

  return (
    <>
    <Header />
    <TaskForm filter={ filter } setFilterCount={ setFilterCount } />
    <div className='filter-delete-all'>
      <Filter setFilter={ setFilter } filterCount={ filterCount } />
      <DeleteAll filter={ filter } setFilter={ setFilter } />
    </div>
    </>
  )
}

export default App
