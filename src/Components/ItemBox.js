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

        /* .child_div {
            height : 15rem;
            width: 22rem;
            position: relative;
            border-radius: 1rem;
            overflow: hidden;

            .cat {
                position: absolute;
                top: 0;
                margin: .2rem;
                padding: .2rem 1rem;
                font-weight: bold;
                font-size: 1.1rem;
                border-radius: .5rem;
                background-color: ${({ theme }) => theme.colors.color};
                color: ${({ theme }) => theme.colors.bg};
                transform: translateY(-110%);
            }
            
            .img{
                height: 100%;
                width: 100%;
            }
            
            &::before {
                content: "";
                position: absolute;
                height: 100%;
                width: 100%;
                background-color: rgba(0,0,0,.5);
                transform: translateX(-100%);
                transition: all .2s;
            }
            
            
            &:hover:before , &:hover .cat {
                transform: translateY(0%);
            }

        } */

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
                        {/* <div className="child_div">
                            <p className="cat">{items.category}</p>
                            <img src={items.image} alt={items.name} className="img" />
                        </div> */}
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