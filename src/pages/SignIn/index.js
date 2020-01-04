import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.svg';

export default function SignIn() {
  return (
    <>
      <img src={logo} alt="ShopList" />

      <form>
        <input type="email" placeholder="Your email" />
        <input type="password" placeholder="Secret password" />

        <button type="submit">Log in</button>
        <Link to="/register">Create a free account</Link>
      </form>
    </>
  );
}
