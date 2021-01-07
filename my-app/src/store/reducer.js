
const initialState = {
    fav : [],
    detail : []
}

function dataReducer (state = initialState, action ) {
    // console.log(action)
    switch (action.type) {
        case "fav/setFav":
            // let newData = state.fav
            // newData.push(action.payload)
            return {...state, fav: action.favorite }
        case "FETCH_DETAIL":
            return { ...state, detail : action.detail }
    
        default:
            return state

    }
}


export default dataReducer