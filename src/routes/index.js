import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

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

      <Route path="/cart" component={Cart} isPrivate />
      <Route path="/details" component={CartDetails} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
    </Switch>
  );
}
