import React, { useState, useEffect } from "react";
import axios from "axios";


const Form = ({ type, refreshData, editingItem, setEditingItem }) => {
  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    category: "",
    description: "",
    date: "",
  });

  useEffect(() => {
    if (editingItem) {
      setFormData({
        title: editingItem.title || "",
        amount: editingItem.amount || "",
        category: editingItem.category || "",
        description: editingItem.description || "",
        date: editingItem.date || "",
      });
    }
  }, [editingItem]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingItem) {
      axios
        .put(`http://localhost:8080/api/${type}/${editingItem.id}`, formData)
        .then(() => {
          refreshData((prevData) =>
            prevData.map((item) =>
              item.id === editingItem.id ? formData : item
            )
          );
          setEditingItem(null);
        })
        .catch((error) => console.error("Error updating item:", error));
    } else {
      axios
        .post(`http://localhost:8080/api/${type}`, formData)
        .then(() => {
          refreshData((prevData) => [...prevData, formData]);
          setFormData({
            title: "",
            amount: "",
            category: "",
            description: "",
            date: "",
          });
        })
        .catch((error) => console.error("Error submitting form:", error));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Title"
        required
      />
      <input
        type="number"
        name="amount"
        value={formData.amount}
        onChange={handleChange}
        placeholder="Amount"
        required
      />
      <input
        type="text"
        name="category"
        value={formData.category}
        onChange={handleChange}
        placeholder="Category"
        required
      />
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
      ></textarea>
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        required
      />
      <button type="submit">{editingItem ? "Update" : "Submit"}</button>
    </form>
  );
};

export default Form;
