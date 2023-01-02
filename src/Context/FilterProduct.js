import React, { createContext, useContext, useEffect, useReducer } from "react";
import { AppProvider } from "./UseContaxt";
import reducer from "../Reducer/FilterReducer";

const FilterProductContext = createContext();

const initState = {
    isFilterLoading : false ,
    isFilterError : false ,
    isFilterData : [],
    grid_views : false,
}

const FilterProduct  = ({children}) => {

    const {stateProduct} = useContext(AppProvider);
    const [filterState , dispatch] = useReducer(reducer , initState);
    // console.log(stateProduct);

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
    


    return(
        <FilterProductContext.Provider value={{filterState}}>
            {children}
        </FilterProductContext.Provider>
    )
}

export { FilterProductContext , FilterProduct};