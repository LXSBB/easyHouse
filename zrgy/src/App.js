import React, { Component } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Count from "./components/Count";
import {
  NavLink,
  Switch,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <NavLink to="/" exact>
                首页
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">找公寓</NavLink>
            </li>
            <li>
              <NavLink to="/count">个人中心</NavLink>
            </li>
          </ul>

          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/count" component={Count} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
