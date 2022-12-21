import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom"

const Wrapper = styled.button`
                color: ${({ theme }) => theme.colors.color};
                background-color: transparent;
                padding: .6rem 1.8rem;
                border: none;
                cursor: pointer;
                position: relative;
                
                &::before {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    border-top:.25rem solid ${({ theme }) => theme.colors.color};
                    border-left:.25rem solid ${({ theme }) => theme.colors.color};
                    transition: all .2s;
                }
                
                &::after {
                    content: "";
                    position: absolute;
                    bottom: 0;
                    right: 0;
                    width: 100%;
                    height: 100%;
                    border-bottom:.25rem solid ${({ theme }) => theme.colors.color};
                    border-right:.25rem solid ${({ theme }) => theme.colors.color};
                    transition: all .2s;
                }

                &:hover::before {
                    height: 20%;
                    width: 6%;
                }

                &:hover::after {
                    height: 20%;
                    width: 6%;
                }
`

const Button = (props) => {
    return (
        <NavLink to={props.to}>
            <Wrapper>
                {props.name}
            </Wrapper>
        </NavLink>
    )
}

export default Button;