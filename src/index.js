
import React from "react";

import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import theme from './theme';
import { ThemeProvider } from '@material-ui/styles';
// core components
import Admin from "layouts/Admin.js";
import Home from "./views/SignIn";
import UserProfile from "./views/UserProfile/UserProfile";



import "assets/css/material-dashboard-react.css?v=1.8.0";

const hist = createBrowserHistory();

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Router history={hist}>
      <Switch>
        <Route path="/signIn" component={Home} />
        <Route path="/admin" component={Admin} />
        
        <Redirect from="/" to="/admin/mascotas" />

        <Route path="/UserProfile" component={UserProfile} />
      </Switch>
    </Router>
  </ThemeProvider>,
  document.getElementById("root")
);
