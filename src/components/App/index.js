import React from "react";
import { Provider } from "react-redux";
import store from "store";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import { theme, useStyles } from "components/App/styles";
import { Blog, Company, Contacts, Home, NotFound, Portfolio, Services, Technologies } from 'containers';
import { UpperBar } from 'components';
import "font-awesome/css/font-awesome.min.css";

export default () => {
  const classes = useStyles();

  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <CssBaseline />
          <MuiThemeProvider theme={theme}>
            <div className={classes.main}>
              <Route path="/" component={UpperBar} />
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/services" exact component={Services} />
                <Route path="/technologies" exact component={Technologies} />
                <Route path="/portfolio" exact component={Portfolio} />
                <Route path="/company" exact component={Company} />
                <Route path="/blog" exact component={Blog} />
                <Route path="/contacts" exact component={Contacts} />
                <Route path='*' exact component={NotFound} />
              </Switch>
            </div>
          </MuiThemeProvider>
        </BrowserRouter>
      </Provider>
    </div>
  );
};
