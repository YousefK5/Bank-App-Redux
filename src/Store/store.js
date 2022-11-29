import { createStore } from "redux";

const initState = {
  accounts: [
    {
      id: 1,
      customerName: "Rama Jaradat",
      accountNumber: "123333",
      accountType: "Savings accounts",
    },
    {
      id: 2,
      customerName: "Abdullah Hussein",
      accountNumber: "987111",
      accountType: "Student accounts",
    },
    {
      id: 3,
      customerName: "Ibrahim Taqideen",
      accountNumber: "934211",
      accountType: "Student accounts",
    },
    {
      id: 4,
      customerName: "Malek Al-Desougi",
      accountNumber: "931121",
      accountType: "Student accounts",
    },
  ],
};

const reducer = (state = initState, action) => {
    if(action.type=="addCustomer") {
        const length = state.accounts.length;
        const lastId = state.accounts[length-1].id;
        const newCustomer = action.payload;
        const newArr = [...state.accounts ,
             {
                id:lastId+1 ,
                customerName: newCustomer.customerName,
                accountNumber:newCustomer.accNumber,
                accountType:newCustomer.accType,
                }];
        return {...state , accounts: newArr}
    }

    if(action.type=="deleteCustomer") {
        const newArr = state.accounts.filter(e=> e.id!= action.payload);
        return {...state , accounts: [...newArr]}
    }
  return state;
};

const Store = createStore(reducer);
export default Store;
