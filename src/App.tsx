import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Root from "./routes/Root";
import Edit from "./routes/edit/Edit";
import Create from "./routes/create/Create";
import Overview from "./routes/overview/Overview";

function App() {
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

  return <RouterProvider router={router} />;
}

export default App;
