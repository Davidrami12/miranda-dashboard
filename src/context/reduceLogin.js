import { LOGIN, LOGOUT, UPDATE_USER } from "./actionTypes"

export function reduceLogin(state, action) {
    switch (action.type) {
        case LOGIN:
            return { ...state, ...action.payload }
        case LOGOUT:
            return { ...state, ...action.payload }
        case UPDATE_USER:
            return { ...state, ...action.payload }
        default:
            return { ...state }
    }
}