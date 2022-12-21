import React from "react";
import styled from "styled-components"
import { TfiThemifyLogo } from "react-icons/tfi";
import { RxDiscordLogo, RxCodesandboxLogo, RxSketchLogo, RxModulzLogo, RxStitchesLogo } from "react-icons/rx";


const Logo = styled.div`
        margin-top: 5rem;
        display: grid;
        place-items: center;

        p {
            font-size: 1.3rem;
            padding: 2rem;
        }

        div {
            width: 50%;
            display: grid;
            grid-template-columns: repeat(6,1fr);
            place-items: center;
            font-size: 5rem;
            color: ${({theme}) => theme.colors.hover};
        }


        @media (max-width: ${({theme}) => theme.media.mobile}) {
            div {
                grid-template-columns: repeat(3,1fr);
            }            
        }

    `

const Trusted = () => {
    return (
        <>
            <Logo>
                <p>Trusted By 1000+ Companies</p>
                <div>
                    <TfiThemifyLogo />
                    <RxDiscordLogo />
                    <RxCodesandboxLogo />
                    <RxSketchLogo />
                    <RxModulzLogo />
                    <RxStitchesLogo />
                </div>
            </Logo>
        </>
    )
}

export default Trusted;