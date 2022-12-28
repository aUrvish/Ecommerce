import React from "react";
import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width: 100%;
    display: grid;
    place-items: center;
    
    .images {
        display: grid;
        place-items: center;
        grid-template-columns: repeat(4,1fr);
        
        div {
            width: 100%;
            display: grid;
            img {
                height: 5rem;
                width: 6.5rem;
                margin: .5rem;
                border-radius:.5rem;

                &:hover {
                    cursor: pointer;
                }
            }
        }
    }

    .image {
        width: 100%;
        margin: .5rem;
        
        .main_image {
            display: grid;
            place-items: center;

            img {
                height: 25rem;
                width: auto;
                border-radius: .5rem;
            }
        }
    }

    @media (max-width: ${({theme}) => theme.media.tab}) {
        .images{
            div {
                img {
                    height: 2.5rem;
                    width: auto;
                }
            }
        }

        .image {
            .main_image{
                img {
                    height: 15rem;
                    width: auto;
                }
            }
        }
    }
`

const ProductImage = ({data}) => {
    // console.log(props.data[0].url);

    const [setImage , getImage] = useState(0)
    return (
        <Wrapper>
            <div className="image">
                <figure className="main_image">
                    <img src={data[setImage].url} alt={data[setImage].name}/>
                </figure>
            </div>
            <div className="images">
                {
                    data.map((curr , index) => {

                        const {url} = curr;

                        return(
                            <div key={index}>
                                <figure>
                                    <img src={url} alt={curr.name} onClick={() => getImage(index)}/>
                                </figure>
                            </div>
                        )
                    })
                }
            </div>
        </Wrapper>
    )
}

export default ProductImage;