import { createContext, useContext } from "react";
import { useState } from "react";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const expenseList = [
  {
    title: "Cash",
    amount: "+500",
    isIncome: true,
  },
  {
    title: "Book",
    amount: "-40",
    isIncome: false,
  },
  {
    title: "Camera",
    amount: "-200",
    isIncome: false,
  },
];

const AppContext = ({ children }) => {
  const [list, setList] = useState(expenseList);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [balance, setBalance] = useState(0);
  const [transaction, setTransaction] = useState({
    text: "",
    amount: "",
  });

  return (
    <GlobalContext.Provider
      value={{
        list,
        setList,
        income,
        setIncome,
        expense,
        setExpense,
        balance,
        setBalance,
        transaction,
        setTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default AppContext;
