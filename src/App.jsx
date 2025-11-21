import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Item } from './page/Item'
import { Expense } from './page/Expense'
import { Addexpense } from './page/Addexpense'



function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<Item/>} />
        <Route path='/expense' element={<Expense/>} />
        <Route path='/addexpense' element={<Addexpense/>}/>
      </Routes>
    </>
  )
}

export default App
