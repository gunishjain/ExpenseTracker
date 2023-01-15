import React from 'react';
import AddForm from '../../components/form/AddForm';
import TopFold from '../../components/topfold/TopFold';
import './addexpense.css';

const AddExpense = () => {
  return (
    <div className='add-expense'>
      <TopFold/>
      <AddForm/>
    </div>
  )
}

export default AddExpense