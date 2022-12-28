import React, { useContext } from "react";
import { AppProvider } from "../Context/UseContaxt";
import ItemBox from "./ItemBox";
import Loading from "./Loading";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Wrapper = styled.div`
    margin-bottom: 7rem;
    display: grid;
    place-items: center;

    .text {
        width: 90%;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        margin-bottom: 2rem;
        
        p {
            font-size: 2rem;
            font-weight: bold;
        }
        
        a{
            font-size: 1.5rem;
            text-decoration: none;
            color: ${({theme}) => theme.colors.hover};
        }
    }

    .container {
        width: 90%;
        display: grid;
        grid-template-columns: repeat(3,1fr);
    }

    @media (max-width: ${({theme}) => theme.media.tab}) {
        .container {
            width: 100%;
        }        
    }

    @media (max-width: ${({theme}) => theme.media.mobile}) {
        .container {
            grid-template-columns: 1fr;
            gap: 2rem;
        }        
    }
`

const FetureProduct = () => {

    const {stateProduct } = useContext(AppProvider);

    if (stateProduct.isLoading === true) {
        return (
            <>
                <Loading />
            </>
        )
    } else if (stateProduct.isError) {
        return;
    } else {
        return (
            <>
                <Wrapper>

                    <div className="text">
                        <p>Our Feature Services</p>
                        <NavLink to={"/products"}>Show all</NavLink>
                    </div>

                    <div className="container">
                        {
                            stateProduct.feture.map((curr , i) => {
                                return (
                                    <ItemBox key={i} value={{ ...curr }} />
                                )
                            }
                            )
                        }
                    </div>
                </Wrapper>
            </>
        )
    }

}

export default FetureProduct;