import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
    margin : 0;
    padding : 0;
    box-sizing : border-box;
    font-family: cursive;
}    

html {
    font-size : 62.5%;
}

body {
    height : 100vh;
    width : 100%;
    background-color: ${ ({theme}) => theme.colors.bg };
    color : ${ ({theme}) => theme.colors.color }
}

`

export default GlobalStyle;