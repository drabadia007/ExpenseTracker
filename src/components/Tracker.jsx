import React, { useEffect, useState } from "react";
import SingleListItem from "./SingleListItem";
import AddTransactionForm from "./AddTransactionForm";
import { useGlobalContext } from "../context";

const Tracker = ({ list, handleAdd, handleNegativeVal }) => {
  const { income, setIncome, expense, setExpense, balance, setBalance } =
    useGlobalContext();

  useEffect(() => {
    let inc = 0,
      exp = 0;
    for (let item of list) {
      if (item.amount.slice(0, 1) === "+") {
        inc = inc + +item.amount.slice(1);
      } else {
        exp = exp + +item.amount.slice(1);
      }
    }
    setExpense(exp);
    setIncome(inc);
    let remainingBal = inc - exp;
    setBalance(remainingBal);
  }, [list]);

  useEffect(() => {
    if (balance < 0) {
      handleNegativeVal();
      alert(
        "Please add some income to perform expense greater than your Balance"
      );
    }
  }, [balance]);

  return (
    <div className="container">
      <div>
        <h1 style={{ textAlign: "center" }}>Expense Tracker</h1>
      </div>

      <div>
        <h3>Your Balance</h3>
        <h2>${balance}</h2>
      </div>

      <div className="income-expense">
        <div style={{ width: "40%" }}>
          <h2>INCOME</h2>
          <h2 style={{ color: "green" }}>${income}</h2>
        </div>
        <div style={{ borderRight: "1px solid gray", height: "50px" }}></div>
        <div style={{ width: "40%" }}>
          <h2>Expense</h2>
          <h2 style={{ color: "red" }}>
            {expense > income
              ? `Invalid please add ${Math.abs(balance)} to income`
              : `$${expense}`}
          </h2>
        </div>
      </div>

      <div
        style={{
          borderBottom: "1px solid black",
          padding: "0.5rem",
          margin: "1.2rem 0 ",
        }}
      >
        <h2>History</h2>
      </div>

      <section>
        {list.map((item, index) => {
          return <SingleListItem {...item} key={index} />;
        })}
      </section>

      <AddTransactionForm handleAdd={handleAdd} />
    </div>
  );
};

export default Tracker;
