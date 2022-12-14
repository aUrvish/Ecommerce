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
import Footer from "./Components/Footer";

const App = () => {

  const theme = {
    colors : {
      bg : "rgb(30, 34, 44)",
      // bg : "#070c19",
      color : "#2196f3",
      // color : "#24c5f2",
      hover : "#2e6895",
      shadow : "0 0.5rem 1rem rgba(0, 0, 0, 0.05)",
      back : "rgba(255,255,255,.02)",
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
          <Header/>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<Products />} />
            <Route path="/singleproduct/:id" element={<SingleProduct />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<ErrorPage image="../image/404_img.png" msg="nothing here..." />} />
          </Routes>
          <Footer/>
        </BrowserRouter>
    </>
      </ThemeProvider>
  )
}

export default App;