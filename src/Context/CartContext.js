import React, { createContext, useEffect, useReducer } from "react";
import reduce from "../Reducer/CartReducer";

const CartsContext = createContext();

const getCardDataStorage = () => {
    const storedata = localStorage.getItem("EcommerceCart");
    if (storedata.length === 0) {
        return [];
    }else{
        return JSON.parse(storedata)
    }
}

const cartinit = {
    cart : getCardDataStorage() ,
    totle_item : "" , 
    totle_amount : "" ,
    shipping_fee : 50000,
}

const CartContex = ({children}) => {

    const [cartState , dispatch] = useReducer(reduce , cartinit);

    useEffect(() => {
        localStorage.setItem("EcommerceCart" , JSON.stringify(cartState.cart))
    } , [cartState.cart])

    const getcartData = (data , colordata , numberItem) => {
        dispatch({type : "Add_to_cart" , payload : {data,colordata,numberItem}})
    }

    const cleraCart = () => {
        dispatch({type : "ClearCart"})
    }

    const bindata = (binid) =>{
        console.log(binid);
        dispatch({type : "Bin_data" , payload : binid})
    }

    return <>
        <CartsContext.Provider value={{cartState , getcartData , bindata , cleraCart }}>
            {children}
        </CartsContext.Provider>
    </>
}

export default CartContex ;
export {CartsContext}