import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(90deg, #6190e8 0%, #a7bfe8 100%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

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

    a {
      color: #fff;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.9;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
