import styled from 'styled-components';

export const UpcomingContainer = styled.div`
  /* position: absolute */
  margin-top: -100px;
  position: relative;

  .left-arrow,
  .right-arrow {
    cursor: pointer;
    font-size: 18px;
    color: #e0d2d1;
  }
  .left-arrow {
    position: absolute;
    top: 165px;
    left: 15px;
  }

  .right-arrow {
    position: absolute;
    top: 165px;
    right: 21px;
  }
`;

export const UpcomingCard = styled.div`
  /* display: flex; */
`;

export const Image = styled.img`
  height: 260px;
  border-radius: 12px;
  border: solid 1px rgb(44, 44, 51, 0.4);
`;

export const MovieInfo = styled.span``;
