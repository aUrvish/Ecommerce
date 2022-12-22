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
            console.log(readData);
            dispatch({type : "API_Product" , payload : readData})
        }catch(error){
            console.error(error);
            dispatch({type : "API_Error"})
        }
    }

    useEffect(() => {
        getData()
    }, [])

    console.log({...state});
    return (
        <>
            <AppProvider.Provider value={{...state}}>
                {children}
            </AppProvider.Provider>
        </>
    )
}

// export default UseContext;
export { AppProvider, UseContext };