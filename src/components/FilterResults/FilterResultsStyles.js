import styled from 'styled-components';

export const FilterContainer = styled.section`
  display: flex;
  margin-bottom: 50px;
  flex-direction: column;
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  padding: 0 3% 0 3%;
  position: relative;
`;

export const Pagination = styled.div`
  align-self: center;
  margin-top: 77px;
  display: flex;
  align-items: center;

  p {
    font-size: 11px;
    color: #756c6c;
    margin-bottom: 5px;
  }
`;

export const Button = styled.button`
  background: none;
  cursor: pointer;
  border: none;
  color: #ffffff;
  margin: 20px;
  font-size: 25px;
`;

export const SectionTitle = styled.h2`
  margin-bottom: 15px;
  position: absolute;
  top: -40px;
  z-index: 1000;
  @media (max-width: 885px) {
    font-size: 18px;
    top: -26px;
  }

  @media (max-width: 380px) {
    font-size: 16px;
    top: -17px;
  }
`;
