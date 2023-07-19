// Import the necessary hooks from React
import React, { createContext, useReducer, useEffect, ReactNode } from "react";

// Define the shape of the authentication state
interface AuthState {
  user: {
    email: string;
    password: string;
  } | null;
  authReady: boolean;
}

// Define the shape of the authentication context
interface AuthContextShape {
  user: {
    email: string;
    password: string;
  } | null;
  authReady: boolean;
  dispatch: React.Dispatch<AuthAction>;
}

// Define the shape of the authentication action
type AuthAction =
  | { type: "LOGIN"; payload: { email: string; password: string } }
  | { type: "LOGOUT" }
  | { type: "AUTH_READY"; payload: { email: string; password: string } };

// Create a new context for authentication
export const AuthContext = createContext<AuthContextShape | undefined>(undefined);

// Define a reducer for authentication actions
export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "LOGIN":
      // If the action is LOGIN, update the user and set authReady to true
      return { ...state, user: action.payload, authReady: true };
    case "LOGOUT":
      // If the action is LOGOUT, clear the user and set authReady to false
      return { ...state, user: null, authReady: false };
    case "AUTH_READY":
      // If the action is AUTH_READY, set the user and authReady to true
      return { user: action.payload, authReady: true };
    default:
      // If the action doesn't match any cases, return the current state
      return state;
  }
};

// Create a context provider component
export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
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
      dispatch({ type: "AUTH_READY", payload: JSON.parse(localStorageAuth!) });
    }
  }, []);

  // Render the provider with the current state and dispatch function
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
