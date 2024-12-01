import React from "react";

const HistoryList = ({ history }) => {
  return (
    <div className="history-list">
      <h3>Latest Transactions</h3>
      <ul>
        {history.map((item, index) => (
          <li key={index}>
            <strong>{item.type}</strong>: ${item.amount} - {item.category} on{" "}
            {item.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HistoryList;
