import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import View from "./Components/View";
import { FilterProductContext } from "./Context/FilterProduct";
import ErrorPage from "./ErrorPage";
import Loading from "./Components/Loading";
import Filter from "./Components/Filter";
import ListView from "./Components/ListView";
import {BsGrid3X3GapFill} from "react-icons/bs";
import {FaThList} from "react-icons/fa";
import {AiFillFilter , AiFillCloseCircle} from "react-icons/ai"

const Wrapper = styled.div`
    display: grid;
    place-items: center;

    .main_div_filter {
        width: 90%;
        grid-template-columns: .2fr 1fr;

        .filter {
            position: relative;
            .closeicon {
                position: absolute;
                right: 0;
                font-size: 3rem;
                cursor: pointer;
                display: none;
            }
        }

        .filter_top {
            margin: 2rem 0;
            display: flex;
            justify-content: space-between;

            .filter_btn {
                font-size: 2rem;

                .grid , .list , .menu{
                    margin: 0 .5rem;
                    cursor: pointer;
                }

                .menu {
                    display: none;
                }
            }

            .total_product {
                font-size: 1.5rem;
            }

            .short {
                select {
                    background-color: transparent;
                    color: ${({theme}) => theme.colors.color};
                    border: .2rem solid;
                    border-radius: .5rem;
                    padding: 0 1rem;
                    outline: none;
                    
                    option {
                        background-color: ${({theme}) => theme.colors.bg};
                        
                        &:hover {
                            background-color: ${({theme}) => theme.colors.bg};
                        }
                    }
                }
            }
        }
    }

    @media (max-width: ${({theme}) => theme.media.tab}) {
        .main_div_filter {
            grid-template-columns: 1fr;

            .filter{
                .closeicon{
                    display: block;
                }
            }
            .filter_top {
                .filter_btn{
                    .menu {
                        display: inline-block;
                    }
                }
            }

        }
    }
`

const Products = () => {

    const {filterState , set_grid_view , set_list_view , set_price_filter} = 
    useContext(FilterProductContext);

    const [filterdiv , setfilterdiv] = useState(true);

    if (filterState.isFilterError) {
        return(
            <ErrorPage image={"../image/no-internet.png"} msg={"no internet..."} h="20rem" w="20rem" />
        )
    }else if (filterState.isFilterLoading) {
        return(
            <Loading/>
        )
    }else{
        return(
            <Wrapper>
                <div className="main_div_filter" style={{display : filterdiv ? "grid" : "block"}} >
                    <div className="filter" style={{display : filterdiv ? "block" : "none"}}>
                        <AiFillCloseCircle className="closeicon" onClick={() => setfilterdiv(false)} />
                        <Filter/>
                    </div>
                    <div className="view">
                        <div className="filter_top">
                            <div className="filter_btn">
                                <AiFillFilter className="menu" onClick={() => setfilterdiv(true)} style={{display : filterdiv ? "none" : "inline-block"}} />
                                <BsGrid3X3GapFill className="grid" style={{color: filterState.grid_views ?  "2196f3" : "2e6895" }}
                                onClick={() => set_grid_view()}
                                />
                                <FaThList className="list" style={{color: filterState.grid_views ?  "2e6895" : "2196f3" }}
                                onClick={() => set_list_view()}
                                />
                            </div>
                            <div className="total_product">
                                Total Result : {filterState.isFilterData.length}
                            </div>  
                            <div className="short">
                                <select id="short" onClick={(eve) => set_price_filter(eve)}>
                                    <option>--Select</option>
                                    <option value={"lowest"}>Price(Lowest)</option>
                                    <option value={"Highest"}>Price(Highest)</option>
                                    <option value={"a-z"}>Price(a-z)</option>
                                    <option value={"z-a"}>Price(z-a)</option>
                                </select>
                            </div>
                        </div>
                        {
                            filterState.grid_views ?
                                <View data={filterState.isFilterData}/>
                            :   <ListView data={filterState.isFilterData}/>
                        }
                    </div>
                </div>
            </Wrapper>
        )
    }
}

export default Products;