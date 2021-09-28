import styled from 'styled-components';

export const Modal = styled.div`
  .modal-video-body {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const PlayButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 7px 16px;
  width: unset;
  background: transparent;
  border-radius: 0;
  border: none;
  margin-left: 2px;
  color: unset;
  font-size: 15px;
  letter-spacing: 0;
  font-family: 'Roboto', sans-serif;
  margin-top: 10px;

  @media (max-width: 515px) {
    padding: 0 5px;
  }

  @media (max-width: 348px) {
    font-size: 12px;
    padding: 0;
  }

  .trailer-icon {
    font-size: 25px;
    margin-right: 2px;
    @media (max-width: 348px) {
      font-size: 20px;
      margin-left: 5px;
    }
  }
`;
