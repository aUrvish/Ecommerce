import React, { createContext, useEffect, useReducer } from "react";
import reduce from "../Reducer/ProductReducer";

const AppProvider = createContext();

const inniState = {
    isError : false,
    isLoading : false,
    product : [],
    feture : [],
}

const UseContext = ({ children }) => {

    const [state , dispatch] = useReducer(reduce , inniState);

    const getData = async () => {
        dispatch({type : "API_Loading"})
        try {
            const data = await fetch("https://api.pujakaitem.com/api/products");
            const readData = await data.json()
            dispatch({type : "API_Product" , payload : readData})
        }catch(error){
            dispatch({type : "API_Error"})
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <AppProvider.Provider value={{...state}}>
                {children}
            </AppProvider.Provider>
        </>
    )
}

export { AppProvider, UseContext };