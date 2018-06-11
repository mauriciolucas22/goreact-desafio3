import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Main = () => <h1>Main</h1>;

const Routes = () => (
  <BrowserRouter>
    <Fragment>
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>
    </Fragment>
  </BrowserRouter>
);

export default Routes;
