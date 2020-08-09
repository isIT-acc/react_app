import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <nav className="navbar main-bg-color elevation ">
      <Link to="/react_app/" className="logo">
        <div className="logo_image">
          <hr style={{ backgroundColor: "#efbd5d" }}></hr>
          <hr style={{ backgroundColor: "#c9853f" }}></hr>
          <hr style={{ backgroundColor: "#b73a2c" }}></hr>
        </div>
        <h1 className="logo_text">{props.title}</h1>
      </Link>

      <Link
        id="recomendations"
        to="/react_app/"
        className={
          props.highlighted === "recom"
            ? "uppercase-text menu_item active"
            : "uppercase-text menu_item"
        }
      >
        рекомендации
      </Link>

      <Link
        id="history"
        to="/react_app/history"
        className={
          props.highlighted === "history"
            ? "uppercase-text menu_item active"
            : "uppercase-text menu_item"
        }
      >
        история
      </Link>
    </nav>
  );
}

Navbar.defaultProps = {
  title: "EVRAZ",
};
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Navbar;
