import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";
import styled from "styled-components";
import Aos from "aos";

const Ser = styled.div`
        display: grid;
        place-items: center;
        width: 100%;
        
        .main_div {
            width: 70%;
            height: 100%;
            display: grid;
            align-items: center;
            grid-template-columns: repeat(3,1fr);
            overflow: hidden;
            gap: 2rem;

            .s1 , .s2 , .s3 , .s4 {
                text-align: center;
                padding: 1rem;
                display:grid;
                place-items: center;
                font-size: 1.5rem;
                border-radius: 1rem;
                background-color: rgba(255,255,255,.02);
                color: ${({ theme }) => theme.colors.hover};
                box-shadow: ${({ theme }) => theme.colors.shadow};

                .icon {
                    font-size: 3rem;
                }

            }

            .s1 {
                grid-row: 1/3 ;
                height: 70%;
            }
            .s4 {
                height: 70%;
                grid-row: 1/3 ;
                grid-column: 3/4;
            }
        }

        @media (max-width: ${({ theme }) => theme.media.mobile}) {
            .main_div {
                display: flex;
                flex-direction: column;
                
                .s1 , .s2 , .s3 , .s4{
                    width: 100%;
                    padding: 1.5rem;
                } 
            }
        }

    `;

const Services = () => {

    Aos.init({
        offset: 100,
        duration : 1000,
    });

    return (
        <>
            <Ser>
                <div className="main_div">
                    <div className="s1" data-aos={"fade-right"}>
                        <TbTruckDelivery className="icon" />
                        <p>Super Fast and Free Delivery</p>
                    </div>
                    <div className="s2" data-aos={"zoom-in"}>
                        <MdSecurity className="icon" />
                        <p>Non-contact Shipping</p>
                    </div>
                    <div className="s3" data-aos={"zoom-in"}>
                        <GiReceiveMoney className="icon" />
                        <p>Money-back Guaranteed</p>
                    </div>
                    <div className="s4" data-aos={"fade-left"}>
                        <RiSecurePaymentLine className="icon" />
                        <p>Super Secure Payment System</p>
                    </div>
                </div>
            </Ser>
        </>
    )
}

export default Services;