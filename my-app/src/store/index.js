import { createStore } from "redux"

//preparation
const initialState = {
    fav : []
}

function reducer (state = initialState, action ) {
    // console.log(action)
    switch (action.type) {
        case "fav/setFav":
            let newData = state.fav
            newData.push(action.payload)
            return {...state, fav: newData }
    
        default:
            return state

    }
}

const store = createStore(reducer)

export default store