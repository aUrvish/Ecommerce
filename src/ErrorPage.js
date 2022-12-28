import React from "react";
import styled from "styled-components"
import Button from "./Components/Button";

const Wrapper = styled.div`
    height: 60vh;
    place-items: center;
    display: grid;
    grid-template-columns: repeat(2,1fr);

    .e404_image , .go_back {
        height: 100%;
        width: 100%;
        display: grid;
        place-items: center;

        img {
            height: 40rem;
            width: 40rem;
        }


        div {
            width: 70%;
            text-align: center;
            .head {
                font-size: 3rem;
                font-weight: bold;
                color : ${({theme}) => theme.colors.hover}
            }

            .para {
                font-size: 1.4rem;
                margin: 3rem 0;
            }

        }

    }

    @media (max-width: ${({theme}) => theme.media.mobile}) {
        grid-template-columns: 1fr;
    }

`

const ErrorPage = ({image , msg , h , w}) => {
    return(
        <>
            <Wrapper>
                <div className="e404_image">
                    <img src={image} alt="404" style={{height:`${h}` , width:`${w}`}}/>
                </div>
                <div className="go_back">
                    <div>
                        <p className="head">Oops, {msg}</p>
                        <p className="para">Uh oh, we can't seem to find the page you're loocking for, try going back to previous page</p>
                        <Button name="Go Back" to="/"/>
                    </div>
                </div>
            </Wrapper>
        </>
    )
}

export default ErrorPage;