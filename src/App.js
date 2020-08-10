// import React from "react";
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AppState from "./context/app/AppState";
import Recomendations from "./components/Recomendations";
import History from "./components/History";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <AppState>
        <Router>
          <div className="App">
            <Switch>
              <Route exact path={["/", "/evraz_2/"]}>
                <Navbar highlighted="recom" />
                <div className="container">
                  <Recomendations />
                </div>
              </Route>
              <Route exact path="/evraz_2/history">
                <Navbar highlighted="history" />
                <div className="container">
                  <History />
                </div>
              </Route>
            </Switch>
          </div>
        </Router>
      </AppState>
    );
  }
}

export default App;
