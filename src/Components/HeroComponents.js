import React from "react";
import styled from "styled-components";
import Button from "./Button";


const Hero = styled.div`
        display: grid;
        grid-template-columns: repeat(2,1fr);
        
        .hero_info {
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
                margin: 1.5rem 0;
                font-size: 1.3rem;
            }
            
        }
        
        .hero_image_div {
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


const HeroComponents = (props) => {

    return (
        <>
            <Hero>
                <div className="hero_info">
                    <div>
                        <div className="child_div">
                            <span className="wel">Wellcome To</span>
                            <h1 className="head"> {props.head} </h1>
                            <p className="text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus deleniti dolorem tempora. Doloribus repudiandae debitis velit porro.</p>
                            <Button name="Start Now" to="/products"/>
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