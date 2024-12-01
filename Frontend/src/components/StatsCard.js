import React from "react";

const StatsCard = ({ minIncome, maxIncome, minExpense, maxExpense }) => {
  return (
    <div className="stats-card">
      <div className="card">
        <h3>Minimum Income</h3>
        <p>${minIncome}</p>
      </div>
      <div className="card">
        <h3>Maximum Income</h3>
        <p>${maxIncome}</p>
      </div>
      <div className="card">
        <h3>Minimum Expense</h3>
        <p>${minExpense}</p>
      </div>
      <div className="card">
        <h3>Maximum Expense</h3>
        <p>${maxExpense}</p>
      </div>{" "}
    </div>
  );
};

export default StatsCard;
