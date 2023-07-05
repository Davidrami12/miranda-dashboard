// React
import { createContext, useReducer, useEffect } from "react";

export const AuthContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload, authReady: true };
    case "LOGOUT":
      return { ...state, user: null, authReady: false };
    case "AUTH_READY":
      return { user: action.payload, authReady: true };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    authReady: false,
  });

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      let localStorageAuth = localStorage.getItem("auth");
      dispatch({ type: "AUTH_READY", payload: JSON.parse(localStorageAuth) });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};