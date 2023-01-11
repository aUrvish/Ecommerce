
const CartReducer = (state , action) => {
    if (action.type === "Add_to_cart") {
        const { data , colordata ,numberItem} = action.payload;
        const { image, name, price,  stock, id , colors } = data;

        const setdata = {
            id : id+colordata,
            name : name,
            color : colors[colordata],
            price : price ,
            items : numberItem,
            image : image[0],
            max : stock,
        }

        return {
            ...state,
            cart : [...state.cart , setdata],
        }
    }else if (action.type === "Bin_data") {
        const newdata  = state.cart.filter((curr) => curr.id !== action.payload )
        return {
            ...state,
            cart : [...newdata],
        }
    }else if (action.type === "ClearCart") {
        return{
            ...state,
            cart : [],
        }
    }
}

export default CartReducer;