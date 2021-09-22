import styled from 'styled-components';

export const MovieCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 40px;
  grid-row-gap: 50px;
  max-width: 1920px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 1234px) {
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    grid-gap: 30px;
    grid-row-gap: 40px;
  }

  @media (max-width: 861px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    grid-gap: 30px;
    grid-row-gap: 20px;
  }

  @media (max-width: 542px) {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  }
`;
