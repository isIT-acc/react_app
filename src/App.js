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
            <Navbar />
            <div className="container">
              <Switch>
                <Route
                  exact
                  path={["/", "/react_app/"]}
                  component={Recomendations}
                />
                {/* <Route exact path="/react_app/" component={Recomendations} /> */}
                <Route exact path="/react_app/history" component={History} />
              </Switch>
            </div>
          </div>
        </Router>
      </AppState>
    );
  }
}
// class App extends Component {
//   // lifecycle method, when components are loaded works
//   foo = () => "Bars";
//   render() {
//     const name = "John Doe";
//     const loading = false;
//     const showName = true;

//     // if (loading) {
//     //   return <h4>Loading ...</h4>;
//     // }
//     // const foo = () => "Bar";
//     return (
//       // <React.Fragment>
//       // static markup
//       <div className="App">
//         {loading ? <h4>Loading...</h4> : <h1>hello {showName && name}</h1>}
//         {/* <h1>
//           Hello {name.toUpperCase()}
//           {1 + 1}!
//         </h1>
//         <h2>Goodbye {this.foo()}</h2> */}
//       </div>
//       /* </React.Fragment> */
//       // jsx, className instead class
//       // htmlFor instead for attribute in label element
//       // jsx has only one parent element
//     );
//   }
// }

export default App;
