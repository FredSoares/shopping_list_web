import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logoShop.svg';

import { Container, Content, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="ShoppingList" />
          <Link to="/cart">Cart</Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>Fred Soares</strong>
              <Link to="/profile">My Profile</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="Fred Soares"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
