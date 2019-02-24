/* REDUCER(S)

It's a good practice to define your state shape first.
Based on the state shape, multiple reducers might be defined in this file, combined and exported into a single reducer function.

*/

import { combineReducers } from "redux"
import * as types from "./types"

const agenciesReducer = (state = [], action) => {
    switch (action.type) {
        case types.FETCH_SUCCEEDED:
            return [...state, action.payload.agencies]
        default: return state
    }
}

const reducer = combineReducers({
    agencies: agenciesReducer
})

export default reducer
