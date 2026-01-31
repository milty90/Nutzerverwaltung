import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Root from "./routes/Root";
import Edit from "./routes/edit/Edit";
import Create from "./routes/create/Create";
import Overview from "./routes/overview/Overview";
import { useReducer } from "react";
import userReducer from "./features/userReducer";
import { userContext } from "./context/userContext";
import { storage } from "./utils/localStorageService";
import { ToastContainer } from "react-toastify";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Root />,
      children: [
        { index: true, element: <Overview /> },
        { path: "overview", element: <Overview /> },
        { path: "create", element: <Create /> },
        { path: "edit/:id", element: <Edit /> },
      ],
    },
  ],
  { basename: import.meta.env.BASE_URL },
);

function App() {
  const [users, usersDispatch] = useReducer(
    userReducer,
    [],
    getUsersFromStorage,
  );

  function getUsersFromStorage() {
    return storage.get("users");
  }

  return (
    <>
      <userContext.Provider value={{ users, dispatchUsers: usersDispatch }}>
        <RouterProvider router={router} />
      </userContext.Provider>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        pauseOnHover
      />
    </>
  );
}

export default App;
