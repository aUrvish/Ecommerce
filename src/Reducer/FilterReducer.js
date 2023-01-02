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

            case "SetGridView" :
                return {
                    ...state ,
                    isFilterLoading : false,
                    isFilterError : false,
                    grid_views : true ,
            }

            case "SetListView" :
                return {
                    ...state ,
                    isFilterLoading : false,
                    isFilterError : false,
                    grid_views : false ,
            }

            case "SetPriceFilter" :
                const value = document.getElementById("short").value;
                let newShort;
                
                if (value === "a-z") {
                    newShort = action.payload.sort((a,b) => a.name.localeCompare(b.name));
                }else if (value === "z-a") {
                    newShort = action.payload.sort((a,b) => b.name.localeCompare(a.name));
                } else if (value === "lowest") {
                    newShort = action.payload.sort((a,b) => a.price - b.price);
                }else if (value === "Highest") {
                    newShort = action.payload.sort((a,b) => b.price - a.price);
                }else {
                    newShort = action.payload;
                }

                return {
                    ...state ,
                    price_filter :value,
                    isFilterData : [...newShort],
            }
    
        default:
            return state;
    }
}

export default FilterReducer;