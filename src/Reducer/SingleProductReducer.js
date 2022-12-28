const SingleProductReducer = (state , action) =>
{
    switch (action.type) {

        case "Single_API_Loading":
            return {
                ...state,
                isSingleLoading : true ,
                isLoading : false ,
            }
            

        case "Single_API_Product" :
            return {
                ...state,
                singleProduct : {...action.payload},
                isSingleLoading : false ,
            }
            

        case "Single_API_Error":
                return {
                    ...state,
                    isSingleError : true ,
                    isSingleLoading : false ,
            }
    
        default:
        return state;
    }
}

export default SingleProductReducer;
