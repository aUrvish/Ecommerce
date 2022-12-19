import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Products from "./Products";
import SingleProduct from "./SingleProduct";
import Cart from "./Cart";
import About from "./About";
import ErrorPage from "./ErrorPage";
import GlobalStyle from "./GlobalStyle";
import { ThemeProvider } from "styled-components";

import Header from "./Components/Header"

const App = () => {

  const theme = {
    colors : {
      bg : "rgb(30, 34, 44)",
      color : "#2196f3",
      hover : "#2e6895",
      shadow : "0 0.5rem 1rem rgba(0, 0, 0, 0.05)",
    },

    media : {
      mobile : "768px",
      tab : "998px",
    },
  }

  return (
    <ThemeProvider theme={theme}>
        <>
        <BrowserRouter>
          <GlobalStyle />
          <Header/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<Products />} />
            <Route path="/singleproduct/:id" element={<SingleProduct />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
    </>
      </ThemeProvider>
  )
}

export default App;