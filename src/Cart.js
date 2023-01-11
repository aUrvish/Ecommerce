import React, { useContext } from "react";
import styled from "styled-components";
import {CartsContext} from "./Context/CartContext";
import FormatePrice from "./Helper/FormatePrice";
import {ImBin} from "react-icons/im"
import { NavLink } from "react-router-dom";

const Wrapper = styled.div`
    height: 100%;
    display: grid;
    place-items: center;

    .empty_msg {
        font-size: 2rem;
    }

    .head {
        font-size: 2rem;
    }

    table{
        width: 80%;
        overflow: scroll;
        .tr_head {
            font-size: 1.8rem;  
        }

        
        .item{
            margin: 0 2rem;
            display: flex;
            .img {
                height: 5rem;
                border-radius:.5rem;
                padding: 1rem;
            }
            
            .name_color{
                margin: auto 0;
                text-align: start;

                .name {
                    font-size: 1.4rem;
                }

                .colorspan{
                    height: 1rem;
                    width: 1rem;
                    display: inline-block;
                    border-radius: 50%;
                }
            }
        }

        .price ,.subtot , .quan{
            padding: 0 2rem;
            font-size: 1.2rem;
            
        }
        
        .remove {
            padding: 0 4rem;
            font-size: 1.5rem;
            cursor: pointer;
            color : red;
        }
    }

    .divbtn {
        width: 80%;
        display: flex;
        justify-content: space-between;

        .cartBtn {
            background-color: transparent;
            color: ${({theme}) => theme.colors.color};
            text-decoration: none;
            padding: .2rem 1.5rem;
            border: .2rem solid ${({theme}) => theme.colors.color};
            font-size: 1.3rem;
            border-radius: .5rem;
            cursor: pointer;
        }
    }
`

const Cart = () => {

    const {cartState , bindata , cleraCart } = useContext(CartsContext);
    const {cart} = cartState;

    if (cart.length === 0) {
        return <Wrapper>
            <p className="empty_msg">Cart is Empty...</p>
        </Wrapper>
    }else {
        return(
            <Wrapper>
                <p className="head">Your Cart...</p>
                <table>
                    <tr className="tr_head">
                        <th>Item</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                        <th>Remove</th>
                    </tr>
                    {
                        cart.map((curr ,index) => <tr key={index}>
                            <th className="item">
                                <img className="img" src={curr.image.url} alt={curr.name} />
                                <span className="name_color">
                                    <p className="name">{curr.name}</p>
                                    <p>color <span className="colorspan" style={{backgroundColor : curr.color}}></span> </p>
                                </span>
                            </th>
                            <th className="price">
                                <FormatePrice price={curr.price}/>
                            </th>
                            <th className="quan">
                                {curr.items}
                            </th>
                            <th className="subtot">
                                <FormatePrice price={(curr.price*curr.items)}/>
                            </th>
                            <th className="remove">
                                <ImBin onClick={() => bindata(cart[index].id)}/>
                            </th>
                        </tr>)
                    }
                </table>

                <hr style={{width : "80%"}}/>
                <div className="divbtn">
                    <NavLink to={"/products"} className="cartBtn">Continue  Shoping</NavLink>
                    <button className="cartBtn" onClick={() => cleraCart()}>Clear</button>
                </div>
            </Wrapper>
        )
    }

}

export default Cart;