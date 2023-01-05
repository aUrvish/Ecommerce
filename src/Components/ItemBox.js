import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import FormatePrice from "../Helper/FormatePrice";
import ItemBoxImage from "./ItemBoxImage";

const Wrapper = styled.div`
    display: flex;
    justify-content: center; 
    
    .main_div {
        display: flex;
        flex-direction: column;

        .cart_footer {
            width: 100%;
            display: flex;
            justify-content: space-between;
            
            .item_name ,.item_price {
                margin: .5rem;
                font-weight: bold;
                font-size: 1.3rem;
                color: ${({ theme }) => theme.colors.hover};
            }
        }
    }
    
`

const ItemBox = (prop) => {

    const items = { ...prop.value };

    return (
        <>
            <Wrapper>
                <NavLink to={`/singleproduct/${items.id}`} style={{textDecoration:"none"}}>
                    <div className="main_div">
                        <ItemBoxImage category={items.category} image={items.image} name={items.name}/>
                        <div className="cart_footer">
                            <p className="item_name">{items.name}</p>
                            <p className="item_price"> <FormatePrice price={items.price}/></p>
                        </div>
                    </div>
                </NavLink>
            </Wrapper>
        </>
    )
}

export default ItemBox;