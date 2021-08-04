import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  padding: 8px 16px;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  color: ${(props) => (props.primary ? 'white' : 'black')};
  border: none;
  font-size: 13px;
  margin-top: 10px;
  margin-left: ${(props) => (props.secondary ? '12px' : '2px')};
  letter-spacing: 1px;
  cursor: pointer;
  background-image: ${(props) =>
    props.primary
      ? 'linear-gradient(to bottom right,rgb(160, 63, 240),rgba(84, 29, 139, 0.788))'
      : null};
`;

export const CustomButton = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>;
};
