// Imports required
import React from "react";
import { createContext, useReducer, useEffect, ReactNode } from "react";

interface AuthState {
  user: any;
  authReady: boolean;
}

export type AuthAction = {
  type: "LOGIN" | "LOGOUT" | "AUTH_READY";
  payload?: any;
};

// This context will provide a user, an authReady flag and a dispatch function
export const AuthContext = createContext<{
  user: any;
  authReady: boolean;
  dispatch: React.Dispatch<AuthAction>;
}>({
  user: null,
  authReady: false,
  dispatch: () => {},
});

// Reducer for the auth state. It takes a state and an action, and returns the new state
export const authReducer = ( state: AuthState, action: AuthAction ): AuthState => {
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

// props for AuthContextProvider component
interface AuthContextProviderProps {
  children: ReactNode;
}

// AuthContextProvider component uses the authReducer to manage the auth state
export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    authReady: false,
  });

  // Run this useEffect hook when the component is mounted
  useEffect(() => {
    const localStorageAuth = localStorage.getItem("auth");
    if (localStorageAuth) {
      dispatch({ type: "AUTH_READY", payload: JSON.parse(localStorageAuth) });
    }
  }, []);

  // Render an AuthContext.Provider with the current state and dispatch function
  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};