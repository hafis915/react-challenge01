import { applyMiddleware, createStore } from "redux"
import thunk from "redux-thunk"

//preparation
const initialState = {
    fav : [],
    detail : []
}

function reducer (state = initialState, action ) {
    // console.log(action)
    switch (action.type) {
        case "fav/setFav":
            let newData = state.fav
            newData.push(action.payload)
            return {...state, fav: newData }
        case "FETCH_DETAIL":
            return { ...state, detail : action.detail }
    
        default:
            return state

    }
}

const store = createStore(reducer, applyMiddleware(thunk))

export default store