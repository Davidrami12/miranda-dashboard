// Import the necessary hooks from React
import { createContext, useReducer, useEffect } from "react";

// Create a new context for authentication
export const AuthContext = createContext();

// Define a reducer for authentication actions
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

// Create a context provider component
export const AuthContextProvider = ({ children }) => {
  // Initialize the state and dispatch function with useReducer
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    authReady: false,
  });

  // useEffect hook to update state from localStorage on initial render
  useEffect(() => {
    if (localStorage.getItem("auth")) {
      let localStorageAuth = localStorage.getItem("auth");
      // Dispatch an AUTH_READY action with the user data from localStorage
      dispatch({ type: "AUTH_READY", payload: JSON.parse(localStorageAuth) });
    }
  }, []);

  // Render the provider with the current state and dispatch function
  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};