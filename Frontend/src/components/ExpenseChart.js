import React from "react";
import { Line } from "react-chartjs-2";

const ExpenseChart = ({ expenseData }) => {
  const data = {
    labels: expenseData.map((item) => item.date),
    datasets: [
      {
        label: "Expense",
        data: expenseData.map((item) => item.amount),
        fill: false,
        backgroundColor: "red",
        borderColor: "red",
      },
    ],
  };

  return (
    <div className="chart">
      <h3>Expense Chart</h3>
      <Line data={data} />
    </div>
  );
};

export default ExpenseChart;
