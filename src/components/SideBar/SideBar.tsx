import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import "./SideBar.scss";

function SideBar() {
  return (
    <nav className="root-nav">
      <img className="root-nav__logo" src="/dark-logo-text.png" alt="" />
      <img className="root-nav__mobile" src="/logo-crop.png" alt="" />
      <hr className="root-nav__line" />

      <Link to="/overview">
        <Button
          startIcon={
            <img
              className="root-nav__sidebar-icon"
              src="/rectangles.svg"
              alt="Overview"
            />
          }
        >
          Übersicht
        </Button>
      </Link>

      <Link to="/create">
        <Button
          startIcon={
            <img
              className="root-nav__sidebar-icon"
              src="/user-plus.svg"
              alt="Create"
            />
          }
        >
          Erstellen
        </Button>
      </Link>
    </nav>
  );
}
export default SideBar;
