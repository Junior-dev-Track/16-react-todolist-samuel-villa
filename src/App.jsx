import { useState } from 'react'
import './App.css'
import './scss/style.scss'
import Header from './components/Header'
import { TaskForm } from './components/TaskForm.jsx'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <TaskForm />
    </>
  )
}

export default App
