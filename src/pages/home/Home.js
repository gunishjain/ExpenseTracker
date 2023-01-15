import React from 'react'
import ExpenseList from '../../components/expenses/ExpenseList'
import TopFold from '../../components/topfold/TopFold'
import './home.css'

const Home = () => {
  return (
    <div className='home'>
        <TopFold/>
        <ExpenseList/>
    </div>
  )
}

export default Home