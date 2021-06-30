import { createSelector } from 'reselect';

export const selectUserDetails = (state) => state.user;

export const selectUser = createSelector(
  [selectUserDetails],
  (user) => user.details
);
