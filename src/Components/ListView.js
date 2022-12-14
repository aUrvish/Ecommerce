import React from "react";
import styled from "styled-components";
import FormatePrice from "../Helper/FormatePrice";
import Button from "./Button";
import ItemBoxImage from "./ItemBoxImage";

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: .7fr 1fr;
    place-items: center;
    gap: 2rem;

    .image {
        width: 100%;
        display: flex;
        justify-content: end;
    }

    .info {
        width: 100%;

        .name{
            font-size: 1.8rem;
            padding: .1rem 0;
            font-weight: bold;
        }
        .price {
            font-size: 1.2rem;
            font-weight: bold;
            padding-bottom: .5rem;
        }
        .discrip{
            width: 70%;
            font-size: 1.3rem;
            padding-bottom: 1rem;
            color: ${({theme}) => theme.colors.hover};
        }
    }

    @media (max-width: ${({theme}) => theme.media.mobile }) {
        grid-template-columns: 1fr ;
        .image {
            justify-content: start;
        }
        .info {
            .discrip {
                width: 100%;
            }
        }
    }
`

const ListView = ({data}) => {
    return <Wrapper>
        {
            data.map((curr ,index) => {
                return <React.Fragment key={index}>
                    <div className="image">
                        <ItemBoxImage category={curr.category} image={curr.image} name={curr.name}/>
                    </div>
                    <div className="info">
                        <p className="name"> {curr.name} </p>
                        <p className="price"> <FormatePrice price={curr.price}/> </p>
                        <p className="discrip"> {curr.description.slice(0,99)}... </p>
                        <Button name="Read More" to={`/singleproduct/${curr.id}`}/>
                    </div>
                </React.Fragment> 
            })
        }
    </Wrapper>
}

export default ListView;