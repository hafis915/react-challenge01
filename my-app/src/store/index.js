import { applyMiddleware, createStore, combineReducers } from "redux"
import dataReducer from "./reducer.js"
import thunk from "redux-thunk"


const rootReducer = combineReducers({
    dataReducer
})


const store = createStore(rootReducer, applyMiddleware(thunk))

export default store