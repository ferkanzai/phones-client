import { Link } from "react-router-dom";

import home from "../../icons/home.svg";
import addPhone from "../../icons/plus.svg";

import "./index.scss";

const NavBar = () => {
  return (
    <div className="navBar" data-testid="navbar">
      <div className="navBar__links">
        <Link to="/">
          <img src={home} alt="" />
        </Link>
        <Link to="/phone/add">
          <img src={addPhone} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
