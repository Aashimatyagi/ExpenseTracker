import React, { useState, useEffect } from "react";
import axios from "axios";
import PieChart from "../components/PieChart";
import Form from "../components/Form";
import List from "../components/List";

const ExpensePage = () => {
  const [expenses, setExpenses] = useState([]);
  const [editingItem, setEditingItem] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/expense")
      .then((response) => setExpenses(response.data))
      .catch((error) => console.error("Error fetching expenses:", error));
  }, []);

  return (
    <div>
      <h1>Expense Page</h1>
      <Form
        type="expense"
        refreshData={setExpenses}
        editingItem={editingItem}
        setEditingItem={setEditingItem}
      />
      <List
        items={expenses}
        type="expense"
        refreshData={setExpenses}
        setEditingItem={setEditingItem}
      />
      <PieChart data={expenses} />
    </div>
  );
};

export default ExpensePage;
