import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.svg';

export default function SignUp() {
  return (
    <>
      <img src={logo} alt="ShopList" />

      <form>
        <input placeholder="Full name" />
        <input type="email" placeholder="Your email" />
        <input type="password" placeholder="Secret password" />

        <button type="submit">Create your account</button>
        <Link to="/">I already have an account</Link>
      </form>
    </>
  );
}
