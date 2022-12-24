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

    const data = useContext(AppProvider);
    // console.log(data)

    if (data.isLoading === true) {
        return (
            <>
                <Loading />
            </>
        )
    } else if (data.isError) {
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
                            data.feture.map((curr) => {
                                return (
                                    <ItemBox value={{ ...curr }} />
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

// 0
// :
// category
// :
// "mobile"
// colors
// :
// (3) ['#ff0000', '#000000', '#CDD0D0']
// company
// :
// "apple"
// description
// :
// "The mobile is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it."
// featured
// :
// true
// id
// :
// "thapaserialnoa"
// image
// :
// "https://images.pexels.com/photos/1275229/pexels-photo-1275229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
// name
// :
// "iphone x"
// price
// :
// 6000000