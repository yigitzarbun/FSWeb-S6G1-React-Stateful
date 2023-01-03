import React, { useState } from "react";

export default function () {
  const name = "yiğit";
  const stil = {
    backgroundColor: "black",
    color: "white",
  };

  return (
    <div style={stil}>
      <h3>To Do List</h3>
      <div>
        <input type="text"></input>
        <button>Ekle</button>
        <button>Tamamlandı</button>
        <p>Hello, {name}</p>
        <p>Your lucky number is: {Math.floor(Math.random() * 3 + 1)}</p>
      </div>
    </div>
  );
}
