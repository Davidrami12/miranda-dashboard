// Context
import { useAuthContext } from "./useAuthContext";

// Dispatch login action
export const useLogin = () => {
  const { dispatch } = useAuthContext();

  const login = async (email: string, password: string) => {
    try {
      dispatch({
        type: "LOGIN",
        payload: { email: email, name: "Admin", password: password },
      });
    } catch (err) {
      console.log((err as Error).message);
    }
  };

  return { login };
};