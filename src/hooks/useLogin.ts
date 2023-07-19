// Context
import { useAuthContext } from "./useAuthContext";
import { AuthAction } from "../context/AuthContext"; // import AuthAction from AuthContext

interface LoginFunc {
  (email: string, password: string): Promise<void>;
}

// Dispatch login action
export const useLogin = (): { login: LoginFunc } => {
  const { dispatch } = useAuthContext();

  const login: LoginFunc = async (email, password) => {
    try {
      const action: AuthAction = {  // use AuthAction instead of State
        type: "LOGIN",
        payload: { email, password },
      };
      dispatch(action);
    } catch (err: any) {  // handle err as any type
      console.log(err.message);
    }
  };

  return { login };
};
