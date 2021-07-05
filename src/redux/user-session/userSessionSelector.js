import { createSelector } from 'reselect';

export const selectSessionId = (state) => state.sessionId;

export const selectCurrentId = createSelector(
  [selectSessionId],
  (sessionId) => sessionId.sessionId
);
