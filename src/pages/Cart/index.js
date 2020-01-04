import React from 'react';
import api from '~/services/api';

// import { Container } from './styles';

export default function Cart() {
  api.get('/users/1/carts');
  return <h1>Cart</h1>;
}
