import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import logoCrop from "/logo-crop.png";
import darkLogoText from "/dark-logo-text.png";
import rectangles from "/rectangles.svg";
import userPlus from "/user-plus.svg";

import "./SideBar.scss";

function SideBar() {
  return (
    <nav className="root-nav">
      <img className="root-nav__logo" src={darkLogoText} alt="Logo" />
      <img className="root-nav__mobile" src={logoCrop} alt="Logo" />
      <hr className="root-nav__line" />

      <Link to="/overview">
        <Button
          startIcon={
            <img
              className="root-nav__sidebar-icon"
              src={rectangles}
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
              src={userPlus}
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
