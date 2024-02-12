import React, { useState } from "react";
import { useGlobalContext } from "../context";

const AddTransactionForm = ({ handleAdd }) => {
  const { transaction, setTransaction } = useGlobalContext();

  const handleChange = (e) => {
    setTransaction({ ...transaction, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = transaction.amount;
    let type = typeof +amount.slice(1);
    if (transaction.text && amount) {
      if (
        (amount.slice(0, 1) === "+" || amount.slice(0, 1) === "-") &&
        type === "number"
      ) {
        handleAdd(transaction);
        setTransaction({ text: "", amount: "" });
      } else {
        alert("please include signs like - and + followed by number");
      }
    } else {
      alert("Empty initials");
    }
  };

  return (
    <div>
      <div
        style={{
          borderBottom: "1px solid black",
          padding: "0.5rem",
          margin: "1.2rem 0",
        }}
      >
        <h2>Add new Transaction</h2>
      </div>

      <form action="" onSubmit={(e) => handleSubmit(e)}>
        <div>
          <h3 style={{ marginBottom: ".8rem" }}>Text</h3>
          <input
            type="text"
            name="text"
            className="input"
            value={transaction.text}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div style={{ marginTop: ".8rem" }}>
          <h3>Amount</h3>
          <h4 style={{ marginBottom: ".8rem" }}>
            (-ve for expense and +ve for income)
          </h4>
          <input
            type="text"
            name="amount"
            className="input"
            value={transaction.amount}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <button className="btn" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
};

export default AddTransactionForm;
