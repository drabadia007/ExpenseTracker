import React from "react";

const SingleListItem = ({ title, isIncome, amount }) => {
  return (
    <div className={`single-item ${isIncome ? "green" : "red"}`}>
      <div>
        <h3>{title}</h3>
      </div>
      <div>
        <h3>{amount}</h3>
      </div>
    </div>
  );
};

export default SingleListItem;
