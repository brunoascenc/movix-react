import React from 'react';
import styled from 'styled-components';

const Skeleton = styled.div`
  width: ${(props) => (props.resultsCard ? '230px' : '175px')};
  height: ${(props) => (props.resultsCard ? '350px' : '260px')};
  background: rgb(44, 44, 51, 0.2);
  border-radius: 12px;
  border: solid 1px rgb(44, 44, 51, 0.2);
  margin-top: 7px;
  margin-right: ${(props) => (props.userList ? '19px' : 'unset')};
`;

const MoviesSkeleton = ({ ...props }) => {
  return <Skeleton {...props}></Skeleton>;
};

export default MoviesSkeleton;
