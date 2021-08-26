import styled from 'styled-components';

export const FilterContainer = styled.div`
  /* margin-top: -30px; */
  display: flex;
  margin-bottom: 50px;
  flex-direction: column;
`;

export const SectionTitle = styled.h2`
  margin-bottom: 15px;
  /* z-index: 2; */
`;

export const Pagination = styled.div`
  align-self: center;
  margin-top: 75px;
  display: flex;
  align-items: center;
  p {
    font-size: 11px;
    color: #756c6c;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  background: transparent;
  color: #ffffff;
  border: none;
  margin: 10px;
  .pagination-btn {
    color: #dbd0d0;
    font-size: 35px;
  }
`;
