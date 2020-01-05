import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.4);
      margin: 10px 0 20px;
    }

    button {
      background: #253f56;
      margin: 5px 0 0;
      height: 44px;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      font-weight: bold;
      color: #fff;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.05, '#253f56')};
      }
    }
  }

  > button {
    width: 100%;
    background: #f64c75;
    margin: 10px 0 0;
    height: 44px;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.08, '#f64c75')};
    }
  }
`;
