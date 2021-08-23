import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  padding: 8px 16px;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  color: ${(props) => (props.primary ? '#f2eeed' : '#575559')};
  border: none;
  font-size: 16px;
  margin-top: 10px;
  margin-left: ${(props) => (props.secondary ? '12px' : '2px')};
  letter-spacing: 0.5px;
  cursor: pointer;
  font-family: 'Roboto Condensed', sans-serif;
  background: ${(props) => (props.primary ? '#8d28e0' : '#e7e4eb')};
`;

export const CustomButton = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>;
};
