import React from 'react'
import { Navbar } from '../Component/Navbar'
import { Expensetotal } from '../Component/Expensetotal'
import { List } from '../Component/list'

export const Expense = () => {
  return (
    <>
    <Navbar/>
    <List/>
    <Expensetotal/>
    </>
  )
}
