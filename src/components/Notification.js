import React, { useContext } from "react";
import { withStyles } from "@material-ui/core/styles";
import ErrorIcon from "@material-ui/icons/Error";
import AppContext from "../context/app/appContext";
import Button from "@material-ui/core/Button";
import { useMediaQuery } from "react-responsive";

const ColorButton = withStyles((theme) => ({
  root: {
    color: "black",
    textTransform: "uppercase",
    backgroundColor: "#eff4f7",
    border: "1px solid #bbb5b7",
    fontSize: "0.8rem",
    height: "2.2rem",
    width: "8rem",
    "&:hover": {
      backgroundColor: "#eff4f7",
      // boxShadow: "none",
    },
  },
}))(Button);

const Notification = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 750px)" });
  const appContext = useContext(AppContext);
  const { lastUpdateTime } = appContext;
  return (
    <div className="notification" style={{ backgroundColor: "#fde9eb" }}>
      <div className="cardContainer">
        {isTabletOrMobile ? (
          <div>
            <ErrorIcon
              style={{ color: "#ef4b53", fontSize: "2rem" }}
            ></ErrorIcon>
            <div>Уведомление</div>
            <div>
              {lastUpdateTime.getHours()}:{lastUpdateTime.getMinutes()}
            </div>
          </div>
        ) : (
          <div className="flexCenter">
            <div className="flexCenter">
              <ErrorIcon
                style={{ color: "#ef4b53", fontSize: "2rem" }}
              ></ErrorIcon>
              <span style={{ marginLeft: "1rem" }}>Уведомление</span>
            </div>
            <div>
              {lastUpdateTime.getHours()}:{lastUpdateTime.getMinutes()}
            </div>
          </div>
        )}
        <div style={{ marginTop: "1rem" }}>Поступила новая рекомендация</div>
        <div style={{ marginTop: "2rem", textAlign: "right" }}>
          <ColorButton>ok</ColorButton>
        </div>
      </div>
    </div>
  );
};
export default Notification;
