import React, { useState } from "react";
export default function () {
  const [inputDeger, setInputDeger] = useState("");
  const resetInput = () => {
    setInputDeger("");
  };
  const inputuDegistir = (event) => {
    const { value } = event.target;
    setInputDeger(value);
  };
  const stil = {
    color: inputDeger.length > 10 ? "red" : "blue",
  };
  return (
    <div>
      <h3>Input</h3>
      <p style={stil}>{inputDeger.toUpperCase()}</p>
      <input
        id="input"
        type="text"
        value={inputDeger}
        onChange={inputuDegistir}
      ></input>
      <button onClick={resetInput}>Reset</button>
    </div>
  );
}
