import styled from 'styled-components';
import { GrPrevious, GrNext } from 'react-icons/gr';

export const FilterContainer = styled.div`
  /* margin-top: -30px; */
  display: flex;
  margin-bottom: 100px;
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
  .lol {
    color: white;
    font-size: 25px;
  }
`;
