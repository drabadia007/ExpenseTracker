import { useReducer, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Tracker from "./components/Tracker";
import { useGlobalContext } from "./context";

function App() {
  // const [list, setList] = useState(expenseList);

  const { list, setList } = useGlobalContext();

  const [state, dispatch] = useReducer(transactionReducer, list);

  const addTransaction = ({ text, amount }) => {

    dispatch({ type: "ADDITEM", payload: { text, amount } });
  };

  const handleNegativeVal = () => {
    dispatch({ type: "REMOVELAST" });
  };

  return (
    <>
      <Tracker
        list={state}
        setList={setList}
        handleAdd={addTransaction}
        handleNegativeVal={handleNegativeVal}
      />
    </>
  );
}

const transactionReducer = (state, action) => {
  if (action.type === "ADDITEM") {
    let isIncome = action.payload.amount.slice(0, 1) === "+" ? true : false;
    return [
      ...state,
      {
        title: action.payload.text,
        amount: action.payload.amount,
        isIncome,
      },
    ];
  }
  if (action.type === "REMOVELAST") {
    const length = state.length;
    console.log(length);
    let newItems = state.slice(0, length - 1);
    console.log(newItems);
    return newItems;
  }
};

export default App;
