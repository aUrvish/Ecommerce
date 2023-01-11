import React, { useContext, useState } from "react";
import styled from "styled-components";
import FormatePrice from "../Helper/FormatePrice";
import { AiFillStar , AiOutlineStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
import Color , {colordata} from "./Color";
import Button from "./Button";
import {CartsContext} from "../Context/CartContext"

const Wrapper = styled.div`
    padding: 1rem;
    .name{
        font-size: 1.8rem;
        font-weight: bold;
        padding: .5rem 0;
    }

    .star {
        padding: .2rem 0;
        font-size: 1.5rem;
    }

    .past_price {
        padding: .2rem 0;
        font-size: 1.2rem;
        color: ${({theme}) => theme.colors.hover};
    }
    
    .price {
        padding: .4rem 0;
        font-size: 1.2rem;
        font-weight: bold;
    }
    
    .discrip {
        width: 70%;
        padding: .5rem 0;
    }

    .available , .id , .brand , .color {
        font-weight: bold;
        font-size: 1.2rem;
        padding: .3rem 0;
    }

    .btn_div {
        width: 100%;
        display: flex;
        flex-direction: row;
        margin: 1.5rem 0;

        .btn , .num {
            width: 2.5rem;
            height: 2.5rem;
            text-align: center;
            font-size: 1.5rem;
            font-weight: bold;
        }

        .btn {
            color: ${({theme}) => theme.colors.bg};
            background-color: ${({theme}) => theme.colors.hover};
            border: none;
            border-radius: .5rem;
        }
    }
`

const Product_info = ({ data }) => {
    const {getcartData} = useContext(CartsContext);

    const [numberOfItem , setNumberOfItem] = useState(1)

    const { name, stars, price, description, stock, company, id, reviews , colors } = data;
    // console.log(stock);

    const starts = Array.from({ length: 5 }, (curr, index) => {
        let number = index + 0.5;

        if (stars >= index + 1) {
            return (
                <AiFillStar key={index} />
            )
        } else {
            if (stars >= number) {
                return (
                    <BsStarHalf key={index} />
                )
            } else {
                return(
                    <AiOutlineStar key={index}/>
                )
            }
        }
    })

    return (
        <Wrapper>
            <p className="name">{name}</p>
            <p className="star">{starts} (Reviews : {reviews}) </p>
            <p className="past_price">MRP : <del>
                <FormatePrice price={price + ((price * 10) / 100)} />
            </del> </p>
            <p className="price">Deal Of The Day : <FormatePrice price={price} /></p>
            <p className="discrip">{description}</p>
            <p className="available">Available :
                {
                    stock < 0 ? " Not Available" : " In Stoke"
                }
            </p>
            <p className="id">Id : {id}</p>
            <p className="brand">Brand : {company}</p>
            <p className="color">Color : {<Color data={colors} />} </p>

            <div className="btn_div">
                <button className="btn" onClick={() => numberOfItem <= 1 ? setNumberOfItem(1) : setNumberOfItem(numberOfItem - 1)}>-</button>
                <p className="num">{numberOfItem}</p>
                <button className="btn" onClick={() =>numberOfItem < stock ? setNumberOfItem(numberOfItem + 1) : setNumberOfItem(stock)}>+</button>
            </div>

            <p onClick={() => getcartData(data , colordata , numberOfItem)} >
                <Button name={"Add To Cart"} to={"/cart"}/>
            </p>
        </Wrapper>
    )
}

export default Product_info;