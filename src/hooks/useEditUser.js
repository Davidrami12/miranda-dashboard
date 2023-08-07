// Context
import { useAuthContext } from "./useAuthContext";

export const useEditUser = () => {
  const { dispatch } = useAuthContext();

  // Dispatch edit user action
  const editUser = async (name, email) => {
    try {
      dispatch({
        type: "EDIT_USER",
        payload: { name: name, email: email },
      });
    } catch (err) {
      console.log(err.message);
    }
  };

  return { editUser };
};