import { Outlet } from "react-router-dom";
import "../routes/Root.scss";
import { useState } from "react";
import SideBar from "../components/SideBar/SideBar";
import { headerContext } from "../context/headerContext";
function Root() {
  const [headerTitle, setHeaderTitle] = useState("Nutzerverwaltung");
  return (
    <headerContext.Provider value={{ setHeaderTitle }}>
      <div className="root-body">
        {/* Side Bar*/}
        <SideBar />
        <div className="root-container">
          <header className="root-header">
            <h1 className="header">{headerTitle}</h1>
          </header>
          <main className="main-content">
            <Outlet />
            {/* Footer */}
            <div className="footer">
              &copy; {new Date().getFullYear()} LOOP Nutzerverwaltung. Alle
              Rechte vorbehalten.
            </div>
          </main>
        </div>
      </div>
    </headerContext.Provider>
  );
}

export default Root;
