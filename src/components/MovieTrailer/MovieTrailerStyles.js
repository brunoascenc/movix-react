import styled from 'styled-components';

export const Modal = styled.div`
  position: relative;
`;

export const PlayButton = styled.div`
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 40px;
  opacity: 0.8;
  color: #e9e4eb;

  &:hover {
    opacity: 1;
  }
`;
