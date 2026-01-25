import { createContext } from "react";
import { type UserAction, type UserState } from "../features/userReducer";

export const userContext = createContext<{
  users: UserState;
  dispatchUsers: React.Dispatch<UserAction>;
}>({
  users: [],
  dispatchUsers: () => {},
});
