import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

const Form = () => {
  const dispatch = useDispatch();
  const [customerName , setCustomerName] = useState(''); 
  const [accNumber , setAccNumber] = useState(''); 
  const [accType , setAccType] = useState('Student Accounts'); 

  const handleSubmit = (e)=> {
    e.preventDefault();
    const customer = {
      customerName : customerName,
      accNumber : accNumber,
      accType : accType ,
    }
    console.log(customer);
    e.target.reset();
    setAccType('Student Accounts');
    const action = {
      type: 'addCustomer',
      payload: customer,
    }
    dispatch(action);
  }

  return (
  <form className='container' onSubmit={(e)=>handleSubmit(e)}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Customer Name</label>
    <input type="text" className="form-control" onChange={(e)=>setCustomerName(e.target.value)} required/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Account Number</label>
    <input type="text" className="form-control" onChange={(e)=>setAccNumber(e.target.value)} required/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Account Type :</label>
    <select name="" id="" onChange={(e)=>setAccType(e.target.value)} required>
      <option value="Student Accounts">Student Accounts</option>
      <option value="Savings Accounts">Savings Accounts</option>
    </select>
  </div>
  <button type="submit" className="btn btn-primary">Add Customer</button>
</form>

  )
}

export default Form