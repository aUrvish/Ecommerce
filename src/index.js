import React from "react";
import ReactDOM  from "react-dom/client";
import App from "./App";
import {UseContext} from "./Context/UseContaxt";
import 'aos/dist/aos.css';
import {FilterProduct} from "./Context/FilterProduct";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
  <UseContext>
    <FilterProduct>
      <App/>
    </FilterProduct>
  </UseContext>
  </>
)
