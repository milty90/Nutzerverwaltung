import type { User } from "../types/User";
import { storage } from "../utils/localStorageService";

export type UserState = User[];

export type UserAction = {
  type: "ADD_USER" | "REMOVE_USER" | "UPDATE_USER";
  user: User;
};

export function userReducer(state: UserState, action: UserAction) {
  let updatedState: UserState;

  switch (action.type) {
    case "ADD_USER":
      updatedState = [...state, action.user];
      break;
    case "REMOVE_USER":
      updatedState = state.filter((user) => user.id !== action.user.id);
      break;
    case "UPDATE_USER":
      updatedState = state.map((user) =>
        user.id === action.user.id ? action.user : user,
      );
      break;
    default:
      updatedState = state;
      break;
  }

  storage.set("users", updatedState);
  return updatedState;
}

export default userReducer;
