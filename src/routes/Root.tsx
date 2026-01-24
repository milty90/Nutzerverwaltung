import { Link, Outlet } from "react-router-dom";
import Button from "@mui/material/Button";
import "../routes/root.css";
import { useState } from "react";
function Root() {
  const [headerTitle, setHeaderTitle] = useState("Nutzerverwaltung");
  return (
    <div className="root-body">
      <nav className="root-nav">
        <img className="logo" src="./public/dark-logo.png" alt="" />

        <hr className="line" />

        <Link to="/overview" className="sidebar-item">
          <Button
            onClick={() => setHeaderTitle("Übersicht")}
            className="sidebar-button"
            startIcon={
              <img
                className="sidebar-icon"
                src="./public/rectangles.svg"
                alt="Overview"
              />
            }
          >
            Übersicht
          </Button>
        </Link>
        <Link to="/create" className="sidebar-item">
          <Button
            onClick={() => setHeaderTitle("Nutzer erstellen")}
            className="sidebar-button"
            startIcon={
              <img
                className="sidebar-icon"
                src="./public/user-plus.svg"
                alt="Create"
              />
            }
          >
            Erstellen
          </Button>
        </Link>
        <Link to="/edit" className="sidebar-item">
          <Button
            onClick={() => setHeaderTitle("Nutzer bearbeiten")}
            className="sidebar-button"
            startIcon={
              <img
                className="sidebar-icon"
                src="./public/user-plus.svg"
                alt="Overview"
              />
            }
          >
            Bearbeiten
          </Button>
        </Link>
      </nav>
      <div className="root-container">
        <header className="root-header">
          <h1 className="header">{headerTitle}</h1>
        </header>
        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Root;
