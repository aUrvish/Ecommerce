import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { HiShoppingCart, HiMenu } from "react-icons/hi"
import { CgClose } from "react-icons/cg"

const Header = () => {

    const [ menuIcon , setMenuIcon ] = useState();

    const Header = styled.div`
        padding: .8rem;

        .container {
            position: relative;
            width: 90%;
            margin : auto ;
            display: flex;
            justify-content: space-between;
            align-items: center;

            .logo {
                height: 3rem;
                width: 3rem;
            }

            .nav {
                text-align: center;
                display: flex;

                .nav_list {
                    list-style-type: none;
                    margin: 0 1rem;

                    .nav_link {
                        font-size: 1.5rem;
                        font-weight: bold;
                        text-decoration: none;
                        position: relative;
                        color: ${({theme}) => theme.colors.color};

                        .cart_icon {
                            font-size: 2rem;
                        }

                        .num {
                            position: absolute;
                            font-size: 1rem;
                            top: -30%;
                            right: -20%;
                            font-weight: bold;
                            height: 1.2rem;
                            width: 1.2rem;
                            border-radius: 50%;
                            background-color: red;
                        }

                        &:hover{
                            color: ${({theme}) => theme.colors.hover} ;
                        }

                    }

                    .logIn_btn {
                        color: ${({theme}) => theme.colors.color};
                        background-color: ${({theme}) => theme.colors.bg};
                        padding: .2rem 1rem;
                        border: .2rem solid ${({theme}) => theme.colors.color};
                        border-radius: .5rem;
                        cursor: pointer;
                        font-weight: bold;
                        margin: 0 2rem;
                        font-size: 1.2rem;
                    }

                    .active {
                        color: ${({theme}) => theme.colors.hover};
                        cursor: default;
                    }
                }
            }

            .menu_icon , .close_icon{
                display: none;
                position: absolute;
                right: 0;
                font-size: 2.5rem;
            }
        }

        @media (max-width: ${({theme}) => theme.media.mobile}) {
            padding: 1rem;
            .container {
                flex-direction: column;
                align-items: flex-start;

                .nav {
                    padding: 5rem;
                    flex-direction: column;
                    text-align: center;
                    width: 100%;

                    .nav_list {
                        margin: .5rem 0;

                        .logIn_btn{
                            margin: 1rem 0;
                        }
                    }
                }

                .show_icon{
                    display: block;
                }

                .show {
                    display : flex;
                }

                .unshow {
                    display : none;
                }
            }
        }
        
    `

    return (
        <>
            <Header>
                <div className="container">
                    <NavLink to={"/"}>
                        <img src="./image/shopping-bag.png" alt="logo" className="logo" />
                    </NavLink>

                    <ul className={menuIcon ? "nav show" : "nav unshow"}>
                        <li className="nav_list" onClick={() =>setMenuIcon(false)}>
                            <NavLink to={"/"} className="nav_link">Home</NavLink>
                        </li>
                        <li className="nav_list" onClick={() =>setMenuIcon(false)}>
                            <NavLink to={"/about"} className="nav_link">About</NavLink>
                        </li>
                        <li className="nav_list" onClick={() =>setMenuIcon(false)}>
                            <NavLink to={"/contact"} className="nav_link">Contact</NavLink>
                        </li>
                        <li className="nav_list" onClick={() =>setMenuIcon(false)}>
                            <NavLink to={"/products"} className="nav_link">Products</NavLink>
                        </li>
                        <li className="nav_list" onClick={() =>setMenuIcon(false)}>
                            <button className="logIn_btn">Log In</button>
                        </li>
                        <li className="nav_list" onClick={() =>setMenuIcon(false)}>
                            <NavLink to={"/cart"} className="nav_link">
                                <HiShoppingCart className="cart_icon"/>
                                <span className="num">3</span>
                            </NavLink>
                        </li>
                    </ul>

                    <CgClose className={menuIcon ? "menu_icon show_icon" : "menu_icon"} 
                    onClick={() => setMenuIcon(false)}/>
                    <HiMenu className={menuIcon ? "close_icon" : "close_icon show_icon"}  
                    onClick={() =>setMenuIcon(true)} />

                </div>
            </Header>
        </>
    )
}

export default Header;