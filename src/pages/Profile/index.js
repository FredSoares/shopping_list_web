import React from 'react';
import { useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { Container } from './styles';

export default function Profile() {
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {}

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Full name" />
        <Input name="email" type="email" placeholder="Your email" />
        <hr />

        <Input
          name="oldPassword"
          type="password"
          placeholder="Current password"
        />
        <Input name="newPassword" type="password" placeholder="New password" />
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Confirm password"
        />

        <button type="submit">Update profile</button>
      </Form>

      <button type="button">Log Out</button>
    </Container>
  );
}
