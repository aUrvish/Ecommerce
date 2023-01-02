import React from "react";
import ItemBox from "./ItemBox";
import styled from "styled-components";

const Wrapper = styled.div`
    .container {
        display: grid;
        grid-template-columns: repeat(3,1fr);
    }
    
    @media (max-width: ${({theme}) => theme.media.tab}) {
        .container{
            grid-template-columns: repeat(2 , 1fr);
        }
    }

    @media (max-width: ${({theme}) => theme.media.mobile}) {
        .container{
            grid-template-columns: 1fr;
        }
    }

`
const View = ({data}) => {
    return(
        <Wrapper>
            <div className="container">
            {
                data.map((curr , i) => {
                    return <ItemBox key={i} value={{ ...curr }} />
                })
            }
            </div>
        </Wrapper>
    )
}
export default View;