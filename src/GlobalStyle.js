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
    height : 100%;
}

body {
    height : 100%;
    width : 100%;
    background-color: ${ ({theme}) => theme.colors.bg };
    color : ${ ({theme}) => theme.colors.color };
}

#root {
    height: 100%;
    display: flex;
    flex-direction: column;
}


`

export default GlobalStyle;