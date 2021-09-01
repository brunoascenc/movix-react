import styled from 'styled-components';

export const FilterContainer = styled.div`
  /* margin-top: -30px; */
  display: flex;
  margin-bottom: 50px;
  flex-direction: column;
  overflow-y: hidden;
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
  .scroll-link {
    cursor: pointer;
    margin-top: 3px;
    .pagination-btn {
      color: #ffffff;
      margin: 15px;
      font-size: 18px;
    }
  }
  p {
    font-size: 11px;
    color: #756c6c;
  }
`;
