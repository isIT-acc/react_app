import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AppContext from "../context/app/appContext";
import { useMediaQuery } from "react-responsive";

const Navbar = ({ title }) => {
  // const isTabletOrMobile = useMediaQuery({ query: "(max-width: 580px)" });
  const appContext = useContext(AppContext);
  const { setCurPage, curPage } = appContext;

  return (
    <nav className="navbar main-bg-color elevation ">
      <Link to="/react_app/" className="logo">
        <div className="logo_image">
          <hr style={{ backgroundColor: "#efbd5d" }}></hr>
          <hr style={{ backgroundColor: "#c9853f" }}></hr>
          <hr style={{ backgroundColor: "#b73a2c" }}></hr>
        </div>
        <h1 className="logo_text">{title}</h1>
      </Link>
      <Link
        id="recomendations"
        to="/react_app/"
        className="uppercase-text menu_item active"
      >
        рекомендации
      </Link>
      <Link
        id="history"
        to="/react_app/history"
        className="uppercase-text menu_item"
      >
        история
      </Link>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "EVRAZ",
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Navbar;
