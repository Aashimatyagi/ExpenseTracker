import React from "react";
import axios from "axios";

const List = ({ items, type, refreshData, setEditingItem }) => {
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8080/api/${type}/${id}`)
      .then(() => {
        refreshData((prevData) => prevData.filter((item) => item.id !== id));
      })
      .catch((error) => console.error("Error deleting item:", error));
  };

  const handleEdit = (item) => {
    setEditingItem(item);
  };

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <strong>{item.title}</strong>: ${item.amount} - {item.category}
          <button onClick={() => handleEdit(item)}>Edit</button>
          <button onClick={() => handleDelete(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default List;
