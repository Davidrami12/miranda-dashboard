// src/context/AuthContext.tsx
import React from "react"; // Add this import statement

import { createContext, useReducer, useEffect, ReactNode } from "react";

interface AuthState {
  user: any;
  authReady: boolean;
}

export type AuthAction = {
  type: "LOGIN" | "LOGOUT" | "AUTH_READY";
  payload?: any;
};

export const AuthContext = createContext<{
  user: any;
  authReady: boolean;
  dispatch: React.Dispatch<AuthAction>;
}>({
  user: null,
  authReady: false,
  dispatch: () => {},
});

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

interface AuthContextProviderProps {
  children: ReactNode;
}

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    authReady: false,
  });

  useEffect(() => {
    const localStorageAuth = localStorage.getItem("auth");
    if (localStorageAuth) {
      dispatch({ type: "AUTH_READY", payload: JSON.parse(localStorageAuth) });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};