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
        <div className="root-body__container">
          <header className="root-body__header">
            <h1 className="root-body__header-title ">{headerTitle}</h1>
          </header>
          <main className="root-body__main-content">
            <Outlet />
            {/* Footer */}
            <div className="root-body__footer">
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
