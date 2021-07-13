const fetchDataReducer = (state = {data:""}, action) => {
    switch(action.type){
        case "FETCH_DATA" : 
            return {
                ...state,
                data: action.data
            }
        case "FETCH_DATA_ERROR" : {
            return {
                ...state,
                data: ""
            }
        }
        default : return state
    }
}

export default fetchDataReducer;