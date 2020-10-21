import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Contact from "./components/Contact";
import Sidebar from "./components/Sidebar";
import Header from "./Headerbar";

class Router extends React.Component {
  render() {
    return (
      <div>
       <Header />
        <Switch>
            <Route exact path="/" component={Contact}/>
            <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    );
  }
}
export default Router;
