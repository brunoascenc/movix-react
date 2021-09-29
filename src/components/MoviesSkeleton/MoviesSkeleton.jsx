import React from 'react';
import { Skeleton } from './MoviesSkeletonStyles';

const MoviesSkeleton = ({ ...props }) => {
  return <Skeleton {...props}></Skeleton>;
};

export default MoviesSkeleton;
