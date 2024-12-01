import React from "react";

const BalanceCard = ({ balance, totalIncome, totalExpense }) => {
  return (
    <div className="balance-card">
      <div className="card">
        <h3>Balance</h3>
        <p>${balance}</p>
      </div>
      <div className="card">
        <h3>Total Income</h3>
        <p>${totalIncome}</p>
      </div>
      <div className="card">
        <h3>Total Expense</h3>
        <p>${totalExpense}</p>
      </div>
    </div>
  );
};

export default BalanceCard;
