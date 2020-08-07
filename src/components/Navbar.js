import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AppContext from "../context/app/appContext";
import { useMediaQuery } from "react-responsive";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { recom: true, history: false };
  }

  static defaultProps = {
    title: "EVRAZ",
  };
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  // const isTabletOrMobile = useMediaQuery({ query: "(max-width: 580px)" });
  // const appContext = useContext(AppContext);
  // const { setCurPage, curPage } = appContext;

  handleRecomClick = () => {
    this.setState({ recom: true, history: false });
  };
  handleHistoryClick = () => {
    this.setState({ recom: false, history: true });
  };
  render() {
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
