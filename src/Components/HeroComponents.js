import React from "react";
import styled from "styled-components";

const HeroComponents = (props) => {

    const Hero = styled.div`
        height: 80vh;
        width: 100%;
        box-sizing: border-box;
        display: grid;
        grid-template-columns: repeat(2,1fr);

        .hero_info {
            height: 100%;
            width: 100%;
            display:grid;
            place-items: center;
            
            div {
                height: 40rem;
                width: 40rem;

                .child_div {
                    margin-top: 25%;
                    width: 100%;
                    height: 50%;
                }
            }

            .wel {
                text-transform: uppercase;
                padding: .2rem;
                background-color: ${({theme}) => theme.colors.color};
                color: ${({theme}) => theme.colors.bg};
                border-radius: .5rem;
                font-weight: bold;
            }

            .head {
                font-weight: bold;
                font-size: 4rem;
                color: ${({theme}) => theme.colors.hover};
            }

            .text {
                margin-top: 1rem;
                font-size: 1.3rem;
            }
            
            .btn {
                margin-top: 2rem;
                color: ${({theme}) => theme.colors.color};
                background-color: ${({theme}) => theme.colors.bg};
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
                    border-top:.25rem solid ${({theme}) => theme.colors.color};
                    border-left:.25rem solid ${({theme}) => theme.colors.color};
                    transition: all .2s;
                }
                
                &::after {
                    content: "";
                    position: absolute;
                    bottom: 0;
                    right: 0;
                    width: 100%;
                    height: 100%;
                    border-bottom:.25rem solid ${({theme}) => theme.colors.color};
                    border-right:.25rem solid ${({theme}) => theme.colors.color};
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
            }
        }
        
        .hero_image_div {
            height: 100%;
            width: 100%;
            display:grid;
            place-items: center;
            
            .hero_img
            {
                height: 40rem;
                width: 40rem;
            }
        }

        @media (max-width: ${({theme}) => theme.media.mobile}) {
        
            grid-template-columns: 1fr;
        }
        
        @media (max-width: ${({theme}) => theme.media.tab}) {
            height: 100%;
            width: 100%;

            .hero_info {
                div {
                    height: 35rem;
                    width: 35rem;
                }

                .wel{
                    font-size: .8rem;
                }

                .head {
                    font-size: 3rem;
                }

                .text {
                    font-size: 1.2rem;
                }
            }

            .hero_image_div {
                .hero_img {
                    height: 35rem;
                    width: 35rem;
                }
            }
        }
    `

    return (
        <>
            <Hero>
                <div className="hero_info">
                    <div>
                        <div className="child_div">
                            <span className="wel">Wellcome To</span>
                            <h1 className="head"> {props.head} </h1>
                            <p className="text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus deleniti dolorem tempora. Doloribus repudiandae debitis velit porro.</p>
                            <button className="btn">Start Now</button>
                        </div>
                    </div>
                </div>
                <div className="hero_image_div">
                    <img src="./image/hero_img.png" className="hero_img" alt="hero_img" />
                </div>
            </Hero>
        </>
    )
}

export default HeroComponents;