import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    display: grid;
    place-items: center;

    .main_div {
        height: 100%;
        width: 90%;
        display: grid;
        grid-template-columns: repeat(2,1fr);


        .team {
            display: grid;
            place-items: center;


            .child_div {
                padding: 2rem;
                border-radius:1rem;
                height: 30rem;
                width: 70%;
                background-color: rgba(255,255,255,.02);
                box-shadow: ${({theme}) => theme.colors.shadow};
                
                .head {
                    font-size: 1.7rem;
                }
                
                .together {
                    font-size: 1.4rem;
                }

                .team_div {
                    height: 70%;
                    display: grid;
                    grid-template-columns: repeat(2,1fr);

                    .member1 , .member2 {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        flex-direction: column;

                        .team_img {
                            height: 8rem;
                            width:8rem;
                            border-radius: 50%;
                            border: .2rem solid black;
                        }

                        a {
                            margin-top : 1rem ;
                            font-size: 1.5rem;
                            text-decoration: none;
                            color: ${({theme}) => theme.colors.hover};
                        }
                    }
                }
            }
        }

        
        .form { 
            display: grid;
            place-items: center;
            
            
            form {
                box-shadow: ${({theme}) => theme.colors.shadow};
                width: 80%;
                font-size: 1.5rem;
                padding: 2rem;
                border-radius: 1rem;
                background-color: rgba(255,255,255,.02);
                
                p {
                    width: 100%;
                    text-align: center;
                    font-size: 2.5rem;
                }

                div{
                    display: flex;
                    flex-direction: column;
                    padding: 1rem 0;

                    label {
                        padding: .5rem;
                    }

                    input , textarea {
                        width: 100%;
                        background-color: ${({theme}) => theme.colors.bg};
                        border-radius: .5rem;
                        color: white;
                        border: none;
                        padding: 1rem;
                        outline: none;
                        resize: none;
                    }
                }

                input {
                    border-radius: .5rem;
                    width: 100%;
                    padding: .5rem;
                    color: ${({theme}) => theme.colors.bg};
                    background-color: ${({theme}) => theme.colors.color};
                    font-weight: bold;

                }
            }
        }


    }

    @media (max-width: ${({theme}) => theme.media.tab}) {
        .main_div {
            grid-template-columns: 1fr;
            
            .team  {
                height: 70vh;
            }
        }
    }
    
    @media (max-width: 500px) {
        .main_div {
            .team {
                display: none;

            }
            .form {
                height: 100%;
            }
        }
    }

`

const Contact = () => {

    return(
        <>
            <Wrapper>   
                <div className="main_div">
                    <div className="team">
                        <div className="child_div">
                            <p className="head">Please get in touch and our expert support team will answer all your questions </p>

                            <div className="team_div">
                                <div className="member1">
                                    <img src="./image/avtar/04.jpg" className="team_img" alt="team"/>
                                    <a href="mailto:mandaliyaurvishj7@gmail.com">Jone Deo</a>
                                </div>
                                <div className="member2">
                                    <img src="./image/avtar/09.jpg" className="team_img" alt="team"/>    
                                    <a href="mailto:mandaliyaurvishj7@gmail.com">Lili Deo</a>
                                </div>
                            </div>

                            <p className="together">Let's Create Something together...</p>
                        </div>
                    </div>
                    <div className="form">


                        <form action="https://formspree.io/f/xpzeadzw" method="POST">
                        <p>Contact Us</p>
                            <div>
                                <label htmlFor="Name">Name : </label>
                                <input name="Name" type="text" placeholder="Jone Deo" autoComplete="off"/>
                            </div>
                            <div>
                                <label htmlFor="Email">Email : </label>
                                <input name="Email" type="email" placeholder="xyz@example.com" autoComplete="off"/>
                            </div>
                            <div>
                                <label htmlFor="Message">Massage : </label>
                                <textarea rows="7" cols="30" placeholder="Have a nice day!" name="Message"></textarea>
                            </div>

                            <input type="submit" value="Send" />
                        </form>
                    </div>
                </div>
            </Wrapper>
        </>
    )
} 

export default Contact;