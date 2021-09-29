import React from 'react';
import { BiErrorCircle } from 'react-icons/bi';
import styled from 'styled-components';

const Error = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ErrorMessage = styled.p`
  font-size: 26px;
  border: solid 1px rgb(195, 191, 199, 0.1);
  padding: 12px;
  display: flex;
  align-items: center;
  border-radius: 26px;
  background: rgb(195, 191, 199, 0.1);

  .icon {
    margin-right: 5px;
    font-size: 32px;
  }

  @media (max-width: 375px) {
    font-size: 18px;
  }
`;

const NothingFound = ({ message }) => {
  return (
    <Error>
      <ErrorMessage>
        <BiErrorCircle className="icon" /> {message}
      </ErrorMessage>
    </Error>
  );
};

export default NothingFound;
