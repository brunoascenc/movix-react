import React from 'react';
import styled, { keyframes } from 'styled-components';

const Gradient = keyframes`
    0%{
        background-position:0% 9%;
    }
    50%{
        background-position:100% 92%;
    }
    100%{
        background-position:0% 9%;
        }
`;

const Skeleton = styled.div`
  width: ${(props) => (props.resultsCard ? '230px' : '175px')};
  height: ${(props) => (props.resultsCard ? '350px' : '260px')};
  background: rgb(44, 44, 51, 0.2);
  background: linear-gradient(100deg, #0b090d, #141417);
  animation: ${Gradient} 2s ease infinite;
  border-radius: 12px;
  border: solid 1px rgb(44, 44, 51, 0.2);
  background-size: 400% 400%;
  margin-top: 7px;
  margin-right: ${(props) => (props.userList ? '19px' : 'unset')};
`;

const MoviesSkeleton = ({ ...props }) => {
  return <Skeleton {...props}></Skeleton>;
};

export default MoviesSkeleton;
