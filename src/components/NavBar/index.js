import { Link } from "react-router-dom";

import home from "../../icons/home.svg";

import "./index.scss";

const NavBar = () => {
  return (
    <div className="navBar">
      <div className="navBar__links">
        <Link to="/">
          <img src={home} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
