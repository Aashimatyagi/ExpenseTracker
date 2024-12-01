import React, { useState, useEffect } from "react";
import axios from "axios";
import PieChart from "../components/PieChart";
import Form from "../components/Form";
import List from "../components/List";

const IncomePage = () => {
  const [incomes, setIncomes] = useState([]);
  const [editingItem, setEditingItem] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/income")
      .then((response) => setIncomes(response.data))
      .catch((error) => console.error("Error fetching incomes:", error));
  }, []);

  return (
    <div>
      <h1>Income Page</h1>
      <Form
        type="income"
        refreshData={setIncomes}
        editingItem={editingItem}
        setEditingItem={setEditingItem}
      />
      <List
        items={incomes}
        type="income"
        refreshData={setIncomes}
        setEditingItem={setEditingItem}
      />
      <PieChart data={incomes} />
    </div>
  );
};

export default IncomePage;
