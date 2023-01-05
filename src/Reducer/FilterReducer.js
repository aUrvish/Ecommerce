
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
                const data = [...action.payload];
                const allprice = data.map((curr) => curr.price );
                const maxprice = Math.max(...allprice);

                return {
                    ...state ,
                    isFilterLoading : false,
                    isFilterError : false,
                    isFilterData : [...action.payload],
                    isallData : [...action.payload],
                    filter : {...state.filter , maxPrice : maxprice , Price : maxprice},
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
                const value = action.payload;
                const {isFilterData} = state;
                let newShort;
                
                if (value === "a-z") {
                    newShort = isFilterData.sort((a,b) => a.name.localeCompare(b.name));
                }else if (value === "z-a") {
                    newShort = isFilterData.sort((a,b) => b.name.localeCompare(a.name));
                } else if (value === "lowest") {
                    newShort = isFilterData.sort((a,b) => a.price - b.price);
                }else if (value === "Highest") {
                    newShort = isFilterData.sort((a,b) => b.price - a.price);
                }else {
                    newShort = isFilterData;
                }

                return {
                    ...state ,
                    price_filter :value,
                    isFilterData : [...newShort],
            }

            case "SearchFilter" :
                const name = action.payload.name;
                const val = action.payload.value;
                let searchdata = state.isallData;

                if(name === "text") {
                    searchdata = searchdata.filter((curr) => {
                        return curr.name.toLowerCase().includes(val);
                    }
                    )
                }else if (name === "category") {
                    if (val === "ALL") {
                        searchdata  = state.isallData;
                    }else{
                        searchdata = searchdata.filter((curr) => {
                            return curr.category === val;
                        })
                    }
                }else if (name === "company") {
                    if (val === "ALL") {
                        searchdata  = state.isallData;
                    }else{
                        searchdata = searchdata.filter((curr) => {
                            return curr.company === val;
                        })
                    }
                }else if (name === "colors") {
                    if (val === "ALL") {
                        searchdata  = state.isallData;
                    }else{
                        searchdata = searchdata.filter((curr) => {
                            return curr.colors.includes(val);
                        })
                    }
                
                }else if (name === "price") {
                    searchdata = searchdata.filter((curr) => {
                        return curr.price > val;
                    })
                }else {
                    searchdata = searchdata.map((curr) => curr);
                }

            return {
                ...state , 
                isFilterData  :  [...searchdata],
                filter : {
                    [name] : val,
                } , 
            }
    
        default:
            return state;
    }
}

export default FilterReducer;