import React from "react"
import { NavLink } from "react-router-dom";
import styled from "styled-components"

const Wrapper = styled.div`
    width: 100%;
    padding: 1rem;
    font-size: 1.8rem;

    .link {
        color: ${({theme}) => theme.colors.hover};
        text-decoration: none;
    }
`

const LinkLine = ({ page }) => {
    return (
        <>
            <Wrapper>
                <NavLink className={"link"} to={"/"} >
                    Home
                </NavLink> / {page}
            </Wrapper>
        </>
    )
}

export default LinkLine;