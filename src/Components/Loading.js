import React from "react";
import styled from "styled-components"

const Wrapper = styled.div`
    height: 100vh;
    position: fixed;
    width: 100%;
    background-color: ${({theme}) => theme.colors.bg};
    z-index: 1000;
    display: grid;
    place-items: center;

    div {
        height: 5rem;
        width: 5rem;
        position: relative;


        span {
            position: absolute;
            border-radius: .5rem;
            background-color: ${({theme}) => theme.colors.color};
            height: 2rem;
            width: 2rem;
            animation: load 2s linear infinite;

            @keyframes load  {
                0%{
                    top: 0;
                    left: 0;
                }
                12.5%{
                    top: 0;
                    left: 50%;
                }
                25%{
                    top: 0;
                    left: 50%;
                }
                37.5%{
                    top: 50%;
                    left: 50%;
                }
                50%{
                    top: 50%;
                    left: 50%;
                }
                62.5%{
                    top: 50%;
                    left: 0%;
                }
                75%{
                    top: 50%;
                    left: 0%;
                }
                87.5%{
                    top: 0%;
                    left: 0%;
                }
                100% {
                    top: 0;
                    left: 0;
                }
            }
        }

        span:nth-child(2)
        {
            animation-delay: .67s;
        }

        span:nth-child(3)
        {
            animation-delay: 1.33s;
        }
    }
`

const Loading = () => {
    return(
        <>
            <Wrapper>
                <div>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </Wrapper>
        </>
    )
}

export default Loading;