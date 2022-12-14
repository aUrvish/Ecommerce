import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
    margin : 0;
    padding : 0;
    box-sizing : border-box;
}    

html {
    font-size : 62.5%;
}

body {
    height : 100vh;
    width : 100vw;
    display: grid;
    place-items: center;
    background-color: ${ ({theme}) => theme.colors.bg };
}

`

export default GlobalStyle;