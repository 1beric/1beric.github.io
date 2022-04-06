import { createSelector } from "reselect";

export const getModal = createSelector(
  [(state) => state.modal],
  (modal) => modal
);

export const getBodyType = createSelector(
  [(state) => state.bodyType],
  (bodyType) => bodyType
);

export const getHeaderType = createSelector(
  [(state) => state.headerType],
  (headerType) => headerType
);

export const getLoading = createSelector(
  [(state) => state.loading],
  (loading) => loading
);
