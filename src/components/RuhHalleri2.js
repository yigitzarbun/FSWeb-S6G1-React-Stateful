import React, { useState } from "react";
export default function () {
  const defaultRuhHali = "Normal hissediyorum";
  const iyiRuhHali = "İyi hissediyorum";
  const kotuRuhHali = "Kötü hissediyorum";
  const [ruhHali, setRuhHali] = useState(defaultRuhHali);
  const iyiyim = () => {
    setRuhHali(iyiRuhHali);
  };
  const kotuyum = () => {
    setRuhHali(kotuRuhHali);
  };
  const sifirla = () => {
    setRuhHali(defaultRuhHali);
  };
  const stil = {
    color: ruhHali === iyiRuhHali ? "blue" : "red",
  };
  return (
    <div>
      <h3>Ruh Halleri</h3>
      <p style={stil}>{ruhHali}</p>
      <button onClick={iyiyim}>İyiyim</button>
      <button onClick={kotuyum}>Kötüyüm</button>
      <button onClick={sifirla}>Sıfırla</button>
    </div>
  );
}
