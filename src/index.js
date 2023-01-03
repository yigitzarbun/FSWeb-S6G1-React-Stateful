import React from "react";
import { render } from "react-dom";

import Sayac from "./components/Sayac";
import Input from "./components/Input";
import RuhHalleri from "./components/RuhHalleri";
import Dondurucu from "./components/Dondurucu";
import Kareler from "./components/Kareler";
import Programcilar from "./components/Programcilar";
import Todos from "./components/Todos";
import Sayac2 from "./components/Sayac2";
import RuhHalleri2 from "./components/RuhHalleri2";
import Input2 from "./components/Input2";

render(
  <>
    <Sayac />
    <RuhHalleri />
    <Dondurucu />
    <Input />
    <Kareler />
    <Programcilar />
    <Todos />
    <Sayac2 />
    <RuhHalleri2 />
    <Input2 />
  </>,
  document.querySelector("#root")
);
