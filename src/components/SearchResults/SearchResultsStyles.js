import styled from 'styled-components';

export const SearchContainer = styled.div`
  display: flex;
  margin-bottom: 50px;
  flex-direction: column;
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  padding: 0 3% 0 3%;
  position: relative;
`;

export const SectionTitle = styled.h2`
  margin-bottom: 15px;
  position: absolute;
  top: -40px;
  z-index: 1;
  @media (max-width: 885px) {
    font-size: 18px;
    top: -26px;
  }

  @media (max-width: 380px) {
    font-size: 16px;
    top: -17px;
  }
`;
