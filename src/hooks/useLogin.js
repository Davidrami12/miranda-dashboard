// Context
import { useAuthContext } from "./useAuthContext";

// Dispatch login action
export const useLogin = () => {
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    try {
      dispatch({
        type: "LOGIN",
        payload: { email: email, password: password },
      });
    } catch (err) {
      console.log(err.message);
    }
  };

  return { login };
};