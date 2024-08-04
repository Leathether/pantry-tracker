'use client'

import React, { useState } from "react";

export const TextInput = () => {
  const [text, setText] = useState("");

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return <input type="text" value={text} onChange={handleTextChange} />;
};

export const ItemList = () => {
  const [itemList, setItemList] = useState([]);
  const [text, setText] = useState("item");
  const [dateText, setDateText] = useState("exp_date");

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleDateChange = (e) => {
    setDateText(e.target.value);
  };

  const addItem = () => {
    if (text.trim() !== "") {
      setItemList([...itemList, `${text}..........................................................${dateText}`]);
      setText("item");
      setDateText("exp_date");
    }
  };

  const deleteItem = (index) => {
    setItemList(itemList.filter((_, i) => i !== index));
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleTextChange} />
      <button onClick={addItem}>Add Item</button>
      {itemList.map((item, idx) => (
        <div key={idx} className="item">
          <div className="itemText"><span className="itemTextSpan">{item}</span></div>
          <button className="itemDelButton" onClick={() => deleteItem(idx)}>Delete</button>
        </div>
      ))}
    </div>
  );
};