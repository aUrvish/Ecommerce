import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";
import styled from "styled-components";
const Services = () => {

    const Ser = styled.div`
        display: grid;
        place-items: center;
        /* height: 30vh; */
        /* width: 100vw; */

        .main_div {
            width: 70%;
            height: 100%;
            display: grid;
            grid-template-columns: repeat(2,1fr);
            grid-template-rows: repeat(2,1fr);
            gap: 2rem;


            .s1 , .s2 , .s3 , .s4 {
                box-sizing: border-box;
                padding: 1rem;
                display:grid;
                place-items: center;
                font-size: 1.5rem;
                border-radius: 1rem;
                background-color: rgba(255,255,255,.02);
                box-shadow: ${({theme}) => theme.colors.shadow};

                .icon {
                    font-size: 3rem;
                }

            }

        }

        @media (max-width: ${({theme}) => theme.media.mobile}) {
            .main_div {
                grid-template-columns: 1fr;

                .s1 , .s2 , .s3 , .s4{
                    padding: 3rem;
                    text-align: center;
                } 
            }
        }

    `;

    return (
        <>
            <Ser>
                <div className="main_div">
                    <div className="s1">
                        <TbTruckDelivery className="icon" />
                        <p>Super Fast and Free Delivery</p>
                    </div>
                    <div className="s2">
                        <MdSecurity className="icon" />
                        <p>Non-contact Shipping</p>
                    </div>
                    <div className="s3">
                        <GiReceiveMoney className="icon" />
                        <p>Money-back Guaranteed</p>
                    </div>
                    <div className="s4">
                        <RiSecurePaymentLine className="icon" />
                        <p>Super Secure Payment System</p>
                    </div>
                </div>
            </Ser>
        </>
    )
}

export default Services;