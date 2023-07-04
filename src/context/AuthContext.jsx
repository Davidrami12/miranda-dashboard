// React
import { createContext, useReducer, useEffect } from "react";

// Here I create a new context. This to allow me to have access to the auth data in the whole app (to be used in different components)
export const AuthContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload, authIsReady: true };
    case "LOGOUT":
      return { ...state, user: null, authIsReady: false };
    case "EDIT_USER":
      return { ...state, user: action.payload };
    case "AUTH_IS_READY":
      return { user: action.payload, authIsReady: true };
    default:
      return state;
  }
};

// The children represents whatever this context is going to wrap in the future (in my case it will be the app components: the whole application)
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    authIsReady: false,
  });

  // If already logged in in the past it gets stored in localStorage and we will remain logged in when opening the page
  useEffect(() => {
    if (localStorage.getItem("auth")) {
      let retrievedAuth = localStorage.getItem("auth");
      dispatch({ type: "AUTH_IS_READY", payload: JSON.parse(retrievedAuth) });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};