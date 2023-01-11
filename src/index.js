import React from "react";
import ReactDOM  from "react-dom/client";
import App from "./App";
import {UseContext} from "./Context/UseContaxt";
import 'aos/dist/aos.css';
import {FilterProduct} from "./Context/FilterProduct";
import CartContex from "./Context/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
  <UseContext>
    <FilterProduct>
      <CartContex>
      <App/>
      </CartContex>
    </FilterProduct>
  </UseContext>
  </>
)
