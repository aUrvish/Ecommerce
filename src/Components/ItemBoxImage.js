import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
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
`

const ItemBoxImage = ({ category, image, name }) => {
    return <Wrapper>
        <p className="cat">{category}</p>
        <img src={image} alt={name} className="img" />
    </Wrapper>
}

export default ItemBoxImage;