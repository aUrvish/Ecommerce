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

const App = () => {

  const theme = {
    colors : {
      heading : "black",
      text : "rgba(29,29,29,.8)",
      helper : "#8490ff",
      bg : "#f6f8fa",
      footer_bg : "#0a1435",
      btn : "rgb(98 ,84 ,243)",
      border : "rgba(98 ,84 ,243 ,0.5)",
      hr : "#fff",
      gradient : "linear-gradient(0deg , rgb(132 , 144 , 255) 0% , rgb(98 , 189 , 252) 100%)",
      shadow : "rgba(0,0,0,0.02) 0rem .1rem .3rem 0rem , rgba(27 , 31 , 35 , 0.15) 0rem 0rem 0rem 1rem ",
      shadowSupport : "rgba(0,0,0,0.16) 0rem .1rem .4rem "
    },

    media : {
      mobile : "76.8rem",
      tab : "99.8rem",
    },
  }

  return (
    <ThemeProvider theme={theme}>
        <>
        <BrowserRouter>
          <GlobalStyle />
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