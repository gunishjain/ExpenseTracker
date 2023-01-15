import React from 'react'
import { useSelector } from 'react-redux'
import { toast,ToastContainer } from 'react-toastify';
import Card from './Card';
import './expenselist.css';

const ExpenseList = () => {

  const {expenseList:list,query}=useSelector((state=>state.expenses));

  const filteredList=list.filter(item=>item.title.includes(query));
  console.log(filteredList);

  const notifySuccess = ()=>toast.success("Expense Deleted Successfully");
  
  
  return (
    <div className='expense-list'>

      <ToastContainer
          position="bottom-left"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          theme="light"/>

      {filteredList.length?filteredList.map((item)=> <Card item={item} notifySuccess={notifySuccess} ></Card>

      ):(
      <div className='empty-state'>
          <img src={require('../../assets/images/empty.png')}
              alt='List is Empty'
              className='empty-image'></img>
          <label>Your Expense List is Empty</label>
      </div>
      )}
    </div>
  )
}

export default ExpenseList