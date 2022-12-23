const ProductReducer = (state , action) =>
{
    switch (action.type) {
        case "API_Loading":
            return {
                ...state,
                isLoading : true ,
            }
            
            case "API_Product" :

            const feture = action.payload.filter((item) => item.featured === true);

            return {
                ...state,
                product : [...action.payload],
                feture : [...feture],
                isLoading : false ,
            }
            
            case "API_Error":
                return {
                    ...state,
                    isError : true ,
                    isLoading : false ,
            }
    
        default:
        return state;
    }
}

export default ProductReducer;
