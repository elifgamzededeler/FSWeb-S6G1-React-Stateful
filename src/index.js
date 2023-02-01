import React from "react";
import { render } from "react-dom";

import Sayac from "./components/Sayac"; //done
import RuhHalleri from "./components/RuhHalleri"; //done
import Dondurucu from "./components/Dondurucu"; //done
import Input from "./components/Input";
import Kareler from "./components/Kareler";
import Programcilar from "./components/Programcilar";

render(
  <>
    <Sayac />
    <RuhHalleri />
    <Dondurucu />
    <Input />
    <Kareler />
    <Programcilar />
  </>,
  document.querySelector("#root")
);
