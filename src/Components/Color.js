import React, { useState } from "react";
import styled from "styled-components"

const Wrapper = styled.span`
display: flex;
    .color_span {
        height: 1.5rem;
        width: 1.5rem;
        display: grid;
        margin: .5rem;
        border-radius: 50%;
        place-items: center;
        color: white;
        cursor: pointer;
    }
`
let colordata;
const Color = ({data}) => {

    const [color , setcolor] = useState(0);
    colordata = color;
    return(
        <Wrapper>
            {
                data.map((curr,index) => {
                    return (
                        <span key={index} style={{backgroundColor : curr}} className={"color_span"} onClick={() => setcolor(index)}> {color === index ? "*" : null} </span>
                    )               
                })
            }
        </Wrapper>
    )
}

export default Color;
export {colordata};