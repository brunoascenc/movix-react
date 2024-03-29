import styled from 'styled-components';

export const MovieCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 30px;
  grid-row-gap: 25px;
  max-width: 1350px;
  width: 100%;
  margin: 0 auto;
  z-index: 1;

  @media (max-width: 1234px) {
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    grid-gap: 20px;
    grid-row-gap: 20px;
  }

  @media (max-width: 861px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    grid-gap: 15px;
    grid-row-gap: 15px;
  }

  @media (max-width: 542px) {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  }
`;
