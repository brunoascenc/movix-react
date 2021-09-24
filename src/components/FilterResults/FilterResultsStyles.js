import styled from 'styled-components';

export const FilterContainer = styled.div`
  /* margin-top: -30px; */
  display: flex;
  margin-bottom: 50px;
  flex-direction: column;
  overflow-y: hidden;
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
`;

export const SectionTitle = styled.h2`
  margin-bottom: 15px;
  /* z-index: 2; */
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
