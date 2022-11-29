import React from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import Header from "./Header";
import Footer from "./Footer";
import Form from "./Form";

export default function Home() {
  const accounts = useSelector((state) => state.accounts);
  const dispatch = useDispatch();

  const deleteCustomer = (id)=>{
    const action = {type:"deleteCustomer" , payload: id};
    dispatch(action);
  }

  return (
    <>
      <Header />
      <Form />
      <div className="container col-12 mt-5">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Customer Name</th>
              <th scope="col">Account Number</th>
              <th scope="col">Account Type</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {accounts.map((account) => {
              return (
                <tr
                  key={account.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {account.id}
                  </th>
                  <td className="py-4 px-6">{account.customerName}</td>
                  <td className="py-4 px-6">{account.accountNumber}</td>
                  <td className="py-4 px-6">{account.accountType}</td>
                  <td className="py-4 px-6">
                    <button className="btn btn-danger" onClick={()=>deleteCustomer(account.id)}>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
}
