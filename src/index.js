import React  from "react";
import ReactDOM  from "react-dom/client";
import App from "./App"
import {UseContext} from "./Context/UseContaxt";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
  <UseContext>
    <App/>
  </UseContext>
  </>
)
