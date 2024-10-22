"use client"

import React, { useState } from "react";
import "./main.css";
import Image from "next/image"
import check from "./check.png"

export default function Home() {
  const [text, setText] = useState("item");
  const [dateText, setDateText] = useState("exp_date");
  const [itemList, setItemList] = useState([]);


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

  const removeDefault = (e) => {
    setText("");
    setDateText("");
  }

  const deleteItem = (index) => {
    setItemList(itemList.filter((_, i) => i !== index));
  };

  return (
    <div>
      <header>
        <span className="headerText">Pantry Tracker App</span>
        <div className="listContainer">
          <input 
            className="listInput" 
            value={text}
            onChange={handleTextChange}
            onClick={removeDefault}
          />
          <input
            className="dateInput"
            value={dateText}
            onChange={handleDateChange}
          >
          </input>
          <Image 
            src={check} 
            className="listAdd" 
            alt="go button" 
            onClick={addItem}
          />
        </div>
      </header>
      <div className="itemContainer">
        {itemList.map((item, idx) => (
          <div key={idx} className="item">
            <span className="itemText">{item}</span>
            <button 
              className="itemDelButton" 
              onClick={() => deleteItem(idx)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
