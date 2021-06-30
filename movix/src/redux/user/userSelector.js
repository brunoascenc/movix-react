import { createSelector } from 'reselect';

export const selectToken = (state) => state.auth;

export const selectCurrentToken = createSelector(
  [selectToken],
  (auth) => auth.token
);

export const selectSessionId = (state) => state.sessionId;

export const selectCurrentId = createSelector(
  [selectSessionId],
  (sessionId) => sessionId.sessionId
);
