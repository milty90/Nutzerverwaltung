import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Root from "./routes/Root";
import Edit from "./routes/edit/Edit";
import Create from "./routes/create/Create";
import Overview from "./routes/overview/Overview";
import { useReducer } from "react";
import userReducer from "./features/userReducer";
import { userContext } from "./context/userContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "overview", element: <Overview /> },
      { path: "create", element: <Create /> },
      { path: "edit", element: <Edit /> },
    ],
  },
]);

function App() {
  const [users, usersDispatch] = useReducer(userReducer, []);

  return (
    <userContext.Provider value={{ users, dispatchUsers: usersDispatch }}>
      <RouterProvider router={router} />
    </userContext.Provider>
  );
}

export default App;
