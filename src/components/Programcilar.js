/*
Programcilar Talimatları

Şu kısa videoyu izleyin:
https://www.ergineer.com/assets/materials/a664dfe7-programcilar.gif

Bu bileşen, bir yandan programlama alanındaki öncülerin bir listesini,
ve diğer tarafta o anda öne çıkan programcının idsini izler. Yani 2 adet state dilimi!
Aynı zaman içinde yalnız bir harika programcıyı öne çıkarabiliriz.

Yorumları takip edin.
*/

import React, { useState } from "react";

export const enIyilerListesi = [
  { id: "1", isim: "Ada Lovelace" },
  { id: "2", isim: "Grace Hopper" },
  { id: "3", isim: "Evelyn Boyd Granville" },
  { id: "4", isim: "Mary Kenneth Keller" },
  { id: "5", isim: "Frances Allen" },
  { id: "6", isim: "Carol Shaw" },
];

export default function Programcilar() {
  const [programciListesi, setProgramciListesi] = useState(enIyilerListesi);
  const [programciId, setProgramciId] = useState(null);

  const oneCikaninIsmi = () => {
    let isim = "";
    programciListesi.forEach((item) => {
      if (item.id === programciId) {
        isim = item.isim;
      }
    });
    return isim;
  };

  const stil = {
    fontSize: "1.5em",
    marginTop: "0.5em",
    color: programciId === null ? "royalblue" : "gold",
  };

  return (
    <div className="widget-programmers container">
      <h2>Programcılar</h2>
      <div className="programmers">
        {programciListesi.map((dev) => (
          <div className="programmer" key={dev.id}>
            {dev.isim}{" "}
            <button
              onClick={() => {
                setProgramciId(dev.id);
              }}
            >
              Kutla
            </button>
          </div>
        ))}
      </div>
      <div id="featured" style={stil}>
        {programciId !== null
          ? `🎉 Hadi ${oneCikaninIsmi()}'ı kutlayalım! 🥳`
          : "Harika bir programcı seçin"}
      </div>
    </div>
  );
}
