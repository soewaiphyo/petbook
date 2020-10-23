import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";
import CatListing from "./components/cat-listing";
import DogListing from "./components/dog-listing";
import { CssBaseline } from "@material-ui/core";

function App() {
  return (
    <Router>
      <div className="App">
        <CssBaseline></CssBaseline>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Cat Listing</Link>
              </li>
              <li>
                <Link to="/dog">Dog Listing</Link>
              </li>
            </ul>
          </nav>

          <div>
            <Switch>
              <Route path="/dog">
                <DogListing />
              </Route>
              <Route path="/">
                <CatListing />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
