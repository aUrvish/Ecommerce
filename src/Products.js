import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import View from "./Components/View";
import { FilterProductContext } from "./Context/FilterProduct";
import ErrorPage from "./ErrorPage";
import Loading from "./Components/Loading";
import Filter from "./Components/Filter";
import ListView from "./Components/ListView";
import {BsGrid3X3GapFill} from "react-icons/bs";
import {FaThList} from "react-icons/fa"

const Wrapper = styled.div`
    display: grid;
    place-items: center;

    .main_div_filter {
        width: 90%;
        display: grid;
        grid-template-columns: .25fr 1fr;

        .filter_top {
            margin: 2rem 0;
            display: flex;
            justify-content: space-between;

            .filter_btn {
                font-size: 2rem;

                .grid , .list{
                    margin: 0 .5rem;
                    cursor: pointer;
                }
            }

            .total_product {
                font-size: 1.5rem;
            }

            .short {
                select {
                    background-color: transparent;
                    color: ${({theme}) => theme.colors.color};
                    border: none;
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
`

const Products = () => {

    const {filterState , set_grid_view , set_list_view , set_price_filter} = 
    useContext(FilterProductContext);

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
                <div className="main_div_filter">
                    <div className="filter">
                        <Filter/>
                    </div>
                    <div className="view">
                        <div className="filter_top">
                            <div className="filter_btn">
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
                                <select id="short" onClick={() => set_price_filter()}>
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