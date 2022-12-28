import React, { createContext, useEffect, useReducer } from "react";
import Productreduce from "../Reducer/ProductReducer";
import SingleProductreduce from "../Reducer/SingleProductReducer"

const AppProvider = createContext();

const inniStateProduct = {
    isError : false,
    isLoading : false,
    product : [],
    feture : [],
}

const inniStateSingleProduct = {
    isSingleError : false,
    isSingleLoading : false,
    singleProduct : {} ,
}

const UseContext = ({ children }) => {

    const [stateProduct , dispatchProduct] = useReducer(Productreduce , inniStateProduct);
    const [stateSingleProduct , dispatchSingleProduct] = useReducer(SingleProductreduce , inniStateSingleProduct);

    const getData = async () => {
        dispatchProduct({type : "API_Loading"})
        try {
            const data = await fetch("https://api.pujakaitem.com/api/products");
            const readData = await data.json()
            dispatchProduct({type : "API_Product" , payload : readData})
        }catch(error){
            dispatchProduct({type : "API_Error"})
        }
    }

    const SingleProductAPI = async (id) => {
        dispatchSingleProduct({type : "Single_API_Loading"})
        try {
            const singledata = await fetch(id);
            const single_readData = await singledata.json()
            dispatchSingleProduct({type : "Single_API_Product" , payload : single_readData})
        }catch(error){
            dispatchSingleProduct({type : "Single_API_Error"})
        }
    }

    useEffect(() => {
        getData();
    }, [])


    return (
        <>
            <AppProvider.Provider value={{stateProduct , stateSingleProduct , SingleProductAPI}}>
                {children}
            </AppProvider.Provider>
        </>
    )
}

export { AppProvider, UseContext };