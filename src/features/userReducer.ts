import type { User } from "../types/User";
import { storage } from "../utils/localStorageService";

export type UserState = User[];

export type UserAction = {
  type: "ADD_USER" | "REMOVE_USER" | "UPDATE_USER";
  user: User;
};

export function userReducer(state: UserState, action: UserAction) {
  let updatetState: UserState;

  switch (action.type) {
    case "ADD_USER":
      updatetState = [...state, action.user];
      break;
    case "REMOVE_USER":
      updatetState = state.filter((user) => user.id !== action.user.id);
      break;
    case "UPDATE_USER":
      updatetState = state.map((user) =>
        user.id === action.user.id ? action.user : user,
      );
      break;
    default:
      updatetState = state;
      break;
  }

  storage.set("users", updatetState);
  return updatetState;
}

export default userReducer;
