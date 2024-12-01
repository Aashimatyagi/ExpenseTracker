import React, { useState, useEffect } from "react";
import axios from "axios";
import Graph from "../components/Graph";

function LandingPage() {
  const [income, setIncome] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    // Fetch income and expenses
    const fetchIncomeAndExpenses = async () => {
      const incomeRes = await axios.get("http://localhost:8080/api/income");
      const expenseRes = await axios.get("http://localhost:8080/api/expense");
      setIncome(incomeRes.data);
      setExpenses(expenseRes.data);
    };

    fetchIncomeAndExpenses();
  }, []);

  useEffect(() => {
    // Calculate stats
    const incomeTotal = income.reduce((acc, curr) => acc + curr.amount, 0);
    const expenseTotal = expenses.reduce((acc, curr) => acc + curr.amount, 0);
    setTotalIncome(incomeTotal);
    setTotalExpenses(expenseTotal);
    setBalance(incomeTotal - expenseTotal);
  }, [income, expenses]);

  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <h2>Balance: ${balance}</h2>
        <h3>Total Income: ${totalIncome}</h3>
        <h3>Total Expenses: ${totalExpenses}</h3>
      </div>
      <Graph income={income} expenses={expenses} />
      <div>
        <a href="/income">Manage Income</a>
        <a href="/expenses">Manage Expenses</a>
      </div>
    </div>
  );
}

export default LandingPage;
