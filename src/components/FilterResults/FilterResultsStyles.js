import styled from 'styled-components';
import { CustomButton } from '../CustomButton/CustomButton';

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
  p {
    font-size: 11px;
    color: #756c6c;
  }
`;

export const Button = styled(CustomButton)`
  cursor: pointer;
  border: none;
  width: 100%;
  width: 250px;
  margin: 0 auto;
  margin-top: 50px;
  padding: 11px;
`;
