import { LOGIN, LOGOUT, UPDATE_USER } from "./actionTypes";

export const login = ({ auth, email }) => ({ type: LOGIN, payload: { auth, email } });
export const logout = ({ auth, email }) => ({ type: LOGOUT, payload: { auth, email } });
export const updateUser = ({ auth, email }) => ({ type: UPDATE_USER, payload: { auth, email } });