import React, { useContext } from "react";
import styled from "styled-components";
import View from "./Components/View";
import { FilterProductContext } from "./Context/FilterProduct";
import ErrorPage from "./ErrorPage";
import Loading from "./Components/Loading";
import Filter from "./Components/Filter";
import ListView from "./Components/ListView";

const Wrapper = styled.div`
    display: grid;
    place-items: center;

    .main_div_filter {
        width: 90%;
        display: grid;
        grid-template-columns: .25fr 1fr;
    }
`

const Products = () => {

    const {filterState} = useContext(FilterProductContext);

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