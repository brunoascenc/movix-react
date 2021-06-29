import { createSelector } from 'reselect';

export const selectToken = (state) => state.auth;

export const selectCurrentToken = createSelector(
  [selectToken],
  (auth) => auth.token
);
