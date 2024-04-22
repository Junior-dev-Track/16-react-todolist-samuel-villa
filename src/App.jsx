import { useState } from 'react'
import { useImmer } from 'use-immer'
import './App.css'
import './scss/style.scss'
import Header from './components/Header'
import { TaskForm } from './components/TaskForm.jsx'

function App() {

  return (
    <>
    <Header />
    <TaskForm />
    </>
  )
}

export default App
