import React from 'react';

import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Cart from '../pages/Cart';
import CartDetails from '../pages/CartDetails';
import Profile from '../pages/Profile';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/cart" component={Cart} />
      <Route path="/details" component={CartDetails} />
      <Route path="/profile" component={Profile} />
    </Switch>
  );
}
