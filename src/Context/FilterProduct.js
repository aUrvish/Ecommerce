import React, { createContext, useContext, useEffect, useReducer } from "react";
import { AppProvider } from "./UseContaxt";
import reducer from "../Reducer/FilterReducer";

const FilterProductContext = createContext();

const initState = {
    isFilterLoading : false ,
    isFilterError : false ,
    isFilterData : [],
    grid_views : false,
    price_filter : "",
}

const FilterProduct  = ({children}) => {

    const {stateProduct} = useContext(AppProvider);
    const [filterState , dispatch] = useReducer(reducer , initState);

    useEffect(() => {
        if (stateProduct.isError) {
            dispatch({type : "Filter_Error"});
        }
        else if (stateProduct.isLoading) {
            dispatch({type : "Filter_Loading"})
        }
        else {
            dispatch({type : "Filter_Data" , payload : stateProduct.product});
        }

    } , [stateProduct])

    const set_grid_view = () => {
        dispatch({type : "SetGridView"})
    }

    const set_list_view = () => {
        dispatch({type : "SetListView"})
    }

    const set_price_filter = () => {
        dispatch({type : "SetPriceFilter" , payload : stateProduct.product})
    }


    return(
        <FilterProductContext.Provider value={{filterState , set_grid_view , set_list_view , set_price_filter}}>
            {children}
        </FilterProductContext.Provider>
    )
}

export { FilterProductContext , FilterProduct };