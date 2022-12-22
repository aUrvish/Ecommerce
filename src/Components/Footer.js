import React from "react";
import styled from "styled-components"
import Button from "./Button";
import {NavLink} from "react-router-dom";
import {FaInstagram , FaFacebook} from "react-icons/fa";
import {BsGithub} from "react-icons/bs"

const Wrapper = styled.div`
    display: grid;
    place-items: center;
    margin-top: 7rem;
    background-color: ${({ theme }) => theme.colors.back};
    border-radius: .5rem .5rem 0 0;

    .get_start {
        width: 50%;
        display: flex;
        justify-content: space-between;
        padding: 1.5rem;
        transform: translateY(-50%);
        background-color: #222630;
        border-radius:.5rem ;
        border:.1rem solid ${({theme}) => theme.colors.hover};

        div {
            font-size: 1.3rem;
        }
    }

    .grid {
        width: 90%;
        display: grid;
        grid-template-columns: repeat(5,1fr);
        .footer_about {
            padding: 1rem;
            color: ${({theme}) => theme.colors.hover};
            .head {
                font-size: 2.5rem;
                font-weight: bold;
                margin-bottom: 1rem;
            }
        }

        .footer_custom , .footer_company , .footer_page {
            display: flex;
            flex-direction: column;
            text-align: center;
            p {
                font-size: 2rem;
                margin-bottom: 1rem;
            }
            
            a {
                font-size: 1.5rem;
                text-decoration: none;
                color: ${({theme}) => theme.colors.hover};
                margin: .5rem 0;
            }
        }
        
        .footer_social {
            text-align: center;
            p {
                font-size: 2rem;
                margin-bottom: 2rem;
            }

            .social {
                font-size: 2.5rem;
                .icon {
                    margin: 0 1rem;
                }
            }

            .tel{
                font-size: 1.5rem;
                text-decoration: none;
                color: ${({theme}) => theme.colors.hover};
            }
        }
    }

    .copy {
        margin-top: 3rem;
        margin-bottom: 1rem;
        text-align: center;
        font-size: 1.5rem;
    }

    @media (max-width: ${({theme}) => theme.media.mobile}) {
        .get_start {
            width: 90%;
        }

        .grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
        }
    }
`

const Footer = () => {
    return (
        <>
            <Wrapper>
                <div className="get_start">
                    <div>
                        <p>
                            Ready To Get Start ?
                        </p>
                        <p>
                            Talk to Us today
                        </p>
                    </div>
                    <Button name="Contact Us" to="/contact"/>
                </div>

                <div className="grid">
                    <div className="footer_about">
                        <p className="head">Shoppe Store</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus deleniti dolorem tempora.</p>
                    </div>
                    <div className="footer_custom">
                        <p>Customers</p>
                        <NavLink to={"/"}>Buyer</NavLink>
                        <NavLink to={"/"}>Supplier</NavLink>
                    </div>
                    <div className="footer_page">
                        <p>Pages</p>
                        <NavLink to={"/"}>Privacy Policy</NavLink>
                        <NavLink to={"/"}>terms & Conditions</NavLink>
                        <NavLink to={"*"}>404 Page</NavLink>
                    </div>
                    <div className="footer_company">
                        <p>Company</p>
                        <NavLink to={"/about"}>About Us</NavLink>
                        <NavLink to={"/contact"}>Contact Us</NavLink>
                    </div>
                    <div className="footer_social">
                        <p>Follow Us</p>
                        <div className="social">
                            <FaInstagram className="icon"/>
                            <FaFacebook className="icon"/>
                            <BsGithub className="icon"/>
                        </div>
                        <a href="tel:9702427197" className="tel">+91 9702427197</a>
                    </div>
                </div>

                <div className="copy">
                    <p>@ {new Date().getFullYear()} Urvish Mandaliya. All Rights Reserved.</p>
                </div>
            </Wrapper>
        </>
    )
}

export default Footer;