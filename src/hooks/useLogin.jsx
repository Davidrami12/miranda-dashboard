// Context
import { useAuthContext } from "./useAuthContext";

// Dispatch login action
export const useLogin = () => {
  const { dispatch } = useAuthContext();

  const login = async (userName, email) => {
    try {
      dispatch({
        type: "LOGIN",
        payload: { userName: userName, email: email },
      });
    } catch (err) {
      console.log(err.message);
    }
  };

  return { login };
};