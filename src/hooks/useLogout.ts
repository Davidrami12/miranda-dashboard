// Context
import { useAuthContext } from "./useAuthContext";

// Dispatch logout action
export const useLogout = () => {
  const { dispatch } = useAuthContext();

  const logout = async () => {
    try {
      dispatch({ type: "LOGOUT" });
    } catch (err: any) {
      console.log(err.message);
    }
  };

  return { logout };
};