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
  return state;
};

const Store = createStore(reducer);
export default Store;
