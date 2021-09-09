import React from 'react';
import styled, { keyframes } from 'styled-components';

const Gradient = keyframes`
  0%{
    background-position:0% 50%
  }
  50%{
    background-position:100% 50%
  }
  100%{
    background-position:0% 50%
    }
`;

const Skeleton = styled.div`
  pointer-events: none;
  width: ${(props) => (props.resultsCard ? '230px' : '175px')};
  height: ${(props) => (props.resultsCard ? '350px' : '260px')};
  background: rgb(44, 44, 51, 0.2);
  background: linear-gradient(268deg, #18161a, #0b090d);
  animation: ${Gradient} 1.5s ease infinite;
  border-radius: 12px;
  border: solid 1px rgb(44, 44, 51, 0.2);
  background-size: 400% 400%;
  margin-top: 7px;
  /* margin-right: ${(props) => (props.userList ? '15px' : 'unset')}; */
  /* margin-bottom: 22px; */
`;

const MoviesSkeleton = ({ ...props }) => {
  return <Skeleton {...props}></Skeleton>;
};

export default MoviesSkeleton;
