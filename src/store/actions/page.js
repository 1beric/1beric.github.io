import actions from ".";
import BODY_TYPES from "../../modules/body/util/bodyTypes";
import { getFileFormattedDate } from "../../util/time";
import actionTypes from "../actionTypes";
import selectors from "../selectors";

const page = {
  acSetModal: (newModal) => ({
    type: actionTypes.SET_MODAL,
    payload: {
      newModal: newModal,
    },
  }),
  acSetBodyType: (newBodyType) => ({
    type: actionTypes.SET_BODY_TYPE,
    payload: {
      newBodyType: newBodyType,
    },
  }),
  acSetHeaderType: (newHeaderType) => ({
    type: actionTypes.SET_HEADER_TYPE,
    payload: {
      newHeaderType: newHeaderType,
    },
  }),
  acSetLoading: (newLoading) => ({
    type: actionTypes.SET_LOADING,
    payload: {
      newLoading: newLoading,
    },
  }),
  incrementLoading: () => async (dispatch, getState) => {
    const loading = selectors.getLoading(getState());
    dispatch(actions.acSetLoading(loading + 1));
  },
  decrementLoading: () => async (dispatch, getState) => {
    const loading = selectors.getLoading(getState());
    dispatch(actions.acSetLoading(loading - 1));
  },
  goToHome: () => async (dispatch, getState) => {
    dispatch(actions.acSetBodyType(BODY_TYPES.HOME.id));
  },
};

export default page;
