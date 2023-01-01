const FilterReducer = (state , action) => {
    switch (action.type) {
        case "Filter_Loading" :
            return {
                ...state ,
                isFilterLoading : true,
            }

        case "Filter_Error" :
            return {
                ...state ,
                isFilterLoading : false,
                isFilterError : true ,
            }
            
            case "Filter_Data" :
                return {
                    ...state ,
                    isFilterLoading : false,
                    isFilterError : false,
                    isFilterData : [...action.payload],
            }
    
        default:
            return state;
    }
}

export default FilterReducer;