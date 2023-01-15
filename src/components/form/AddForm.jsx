import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import { categories } from '../../constants/expense-category';
import { addExpense } from '../../redux/actions/expenses';
import 'react-toastify/dist/ReactToastify.css';
import SuccessModal from './success-modal';
import './addform.css';


const AddForm = () => {

//----------State Defined Here-------------------

    const cat=categories;
    const [title,setTitle] = useState("");
    const [amount,setAmount]= useState("");
    const [category,setCategory]= useState();
    const [categoryOpen,setCategoryOpen]=useState(false);
    const [modalOpen,setModalOpen]=useState(false);

//--------------------------------------------------------------

    const dispatch = useDispatch();  //Used to call the Actions 

   //========= All Handle Functions ================= 

    const handleTitle = (e)=>{
      setTitle(e.target.value);
    }

    const handleAmount = (e)=>{
      const val=parseFloat(e.target.value);

      if(isNaN(val)){
        setAmount("");
        return;
      }
      setAmount(val);
    }

    const handleCategory = (category)=>{
      setCategory(category);
      setCategoryOpen(false);
    }

    const handleSubmit= ()=>{

      if(title === '' || amount=== '' || !category){
        const notify=()=>toast("Please Enter Valid Data!");
        notify();
        return;
      }

      const data = {
        title,
        amount,
        category,
        createdAt: new Date(),
      };
      dispatch(addExpense(data));
      setModalOpen(true);
    }

//==============================================


  return (
    <div className='add-form'>
      
      <ToastContainer
          position="bottom-left"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          theme="light"/>
        <SuccessModal modalOpen={modalOpen} setModalOpen={setModalOpen}></SuccessModal>

      <div className='form-item'>
        <label>Title</label>
        <input placeholder='Enter the title for your expenditure' 
          value={title} 
          onChange={(e)=>{handleTitle(e)}}>  
        </input>
      </div>
      <div className='form-item'>
        <label>Amount</label>
        <input placeholder='Enter the amount' 
          value={amount} 
          className='amount-input'
          onChange={(e)=>{handleAmount(e)}}>  
        </input>
      </div>
      <div className='category-container-parent'>
        <div className='category'>
          <div className='category-dropdown' onClick={()=>setCategoryOpen(!categoryOpen)}>
            <label>{category?category.title:'Category'}</label>
            {categoryOpen?<i class="fi fi-rr-angle-down"></i>: <i class="fi fi-rr-angle-left"></i>}
          </div>
          {categoryOpen && 
          <div className='category-container'>
            
            {cat.map((category)=>(
                <div className='category-item'
                   style= { { borderRight: `5px solid ${category.color}`}}
                   key={category.id}
                   onClick={()=>handleCategory(category)} >
                  <label>{category.title}</label>
                  <img src={category.icon} alt={category.title}/>
                </div>
            ))}
          </div>}
        </div>
      </div>
      <div className='form-add-button'>
        <div onClick={handleSubmit}>
          <label>Add</label>
          <i class="fi fi-rr-checkbox"></i>
        </div>
      </div>
    </div>
  )
}

export default AddForm