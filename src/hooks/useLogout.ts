// Context
import { useAuthContext } from "./useAuthContext";

// Dispatch logout action
export const useLogout = () => {
  const { dispatch } = useAuthContext();

  const logout = async () => {
    try {
      dispatch({ type: "LOGOUT" });
    } catch (err) {
      console.log((err as Error).message);
    }
  };

  return { logout };
};
