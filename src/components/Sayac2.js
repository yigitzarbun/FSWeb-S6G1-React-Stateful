import React, { useState } from "react";
export default function () {
  const [sayac, setSayac] = useState(0);
  const sayacArttir = () => {
    setSayac(sayac + 1);
  };
  const sayacAzalt = () => {
    setSayac(sayac - 1);
  };

  const sayacSifirla = () => {
    setSayac(0);
  };

  const stil = {
    color: sayac % 2 === 0 ? "blue" : "red",
  };
  return (
    <div>
      <h3>Sayaç</h3>
      <div style={stil}>
        <p>Sayı: {sayac}</p>
        <p>{sayac % 2 === 0 ? "çift" : "tek"}</p>
      </div>
      <button id="increment" onClick={sayacArttir}>
        Arttır
      </button>
      <button id="decrement" onClick={sayacAzalt}>
        Azalt
      </button>
      <button id="reset" onClick={sayacSifirla}>
        Sıfırla
      </button>
    </div>
  );
}
