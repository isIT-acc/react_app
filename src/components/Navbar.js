import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AppContext from "../context/app/appContext";
import { useMediaQuery } from "react-responsive";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    if (props.highlighted === "recom")
      this.state = { recom: true, history: false };
    if (props.highlighted === "history")
      this.state = { recom: false, history: true };
  }
  // shouldComponentUpdate() {
  //   if (this.props.highlighted === "recom")
  //     this.state = { recom: true, history: false };
  //   if (this.props.highlighted === "history")
  //     this.state = { recom: false, history: true };
  // }

  static defaultProps = {
    title: "EVRAZ",
  };
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    if (this.props.highlighted === "recom")
      this.state = { recom: true, history: false };
    if (this.props.highlighted === "history")
      this.state = { recom: false, history: true };
    return (
      <nav className="navbar main-bg-color elevation ">
        <Link to="/react_app/" className="logo" onClick={this.handleRecomClick}>
          <div className="logo_image">
            <hr style={{ backgroundColor: "#efbd5d" }}></hr>
            <hr style={{ backgroundColor: "#c9853f" }}></hr>
            <hr style={{ backgroundColor: "#b73a2c" }}></hr>
          </div>
          <h1 className="logo_text">{this.props.title}</h1>
        </Link>

        <Link
          id="recomendations"
          to="/react_app/"
          onClick={this.handleRecomClick}
          className={
            this.state.recom
              ? "uppercase-text menu_item active"
              : "uppercase-text menu_item"
          }
        >
          рекомендации
        </Link>

        <Link
          id="history"
          to="/react_app/history"
          onClick={this.handleHistoryClick}
          className={
            this.state.history
              ? "uppercase-text menu_item active"
              : "uppercase-text menu_item"
          }
        >
          история
        </Link>
      </nav>
    );
  }
}

export default Navbar;
