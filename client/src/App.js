import React from "react";
import Search from "./pages/Search";
import Nav from "./components/Nav";
import Saved from './pages/Saved';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './index.css'

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/saved" component={Saved} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
