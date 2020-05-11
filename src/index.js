
import React from "react";

import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import theme from './theme';
import { ThemeProvider } from '@material-ui/styles';
// core components
import Admin from "layouts/Admin.js";
import Home from "./views/SignIn";



import "assets/css/material-dashboard-react.css?v=1.8.0";

const hist = createBrowserHistory();

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Router history={hist}>
      <Switch>
        <Route path="/admin" component={Admin} />
        <Route path="/signin" component={Home} />
        <Redirect from="/" to="/signin" />
      </Switch>
    </Router>
  </ThemeProvider>,
  document.getElementById("root")
);
