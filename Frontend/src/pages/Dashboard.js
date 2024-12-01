import React, { useState, useEffect } from "react";
import axios from "axios";
import BalanceCard from "../components/BalanceCard";
import HistoryList from "../components/HistoryList";
// import StatsCard from "../components/StatsCard";
import IncomeChart from "../components/IncomeChart";
import ExpenseChart from "../components/ExpenseChart";

const Dashboard = () => {
  const [balance, setBalance] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);
  const [history, setHistory] = useState([]);
  const [minIncome, setMinIncome] = useState(0);
  const [maxIncome, setMaxIncome] = useState(0);
  const [minExpense, setMinExpense] = useState(0);
  const [maxExpense, setMaxExpense] = useState(0);
  const [incomeData, setIncomeData] = useState([]);
  const [expenseData, setExpenseData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/stats")
      .then((response) => {
        const stats = response.data;
        setBalance(stats.balance);
        setTotalIncome(stats.totalIncome);
        setTotalExpense(stats.totalExpense);
        setHistory(stats.history);
        setMinIncome(stats.minIncome);
        setMaxIncome(stats.maxIncome);
        setMinExpense(stats.minExpense);
        setMaxExpense(stats.maxExpense);
        setIncomeData(stats.incomeData);
        setExpenseData(stats.expenseData);
      })
      .catch((error) => console.error("Error fetching stats:", error));
  }, []);

  return (
    <div className="dashboard">
      <BalanceCard
        balance={balance}
        totalIncome={totalIncome}
        totalExpense={totalExpense}
      />
      <HistoryList history={history} />
      <StatsCard
        minIncome={minIncome}
        maxIncome={maxIncome}
        minExpense={minExpense}
        maxExpense={maxExpense}
      />
      <IncomeChart incomeData={incomeData} />
      <ExpenseChart expenseData={expenseData} />
    </div>
  );
};

export default Dashboard;
