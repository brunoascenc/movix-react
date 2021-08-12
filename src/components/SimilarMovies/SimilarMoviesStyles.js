import styled from 'styled-components';

export const Similar = styled.div`
  /* display: flex; */
`;

export const SimilarContainer = styled.div`
  /* position: absolute */
  position: relative;
  margin-bottom: 50px;
  margin-top: 120px;
  display: ${(props) => (props.similarLength === 0 ? 'none' : 'block')};
`;
