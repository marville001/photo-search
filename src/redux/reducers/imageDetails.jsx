import { IMAGE_DETAILS } from "../types";

const initialState = {
  image: {},
  loading: false,
  error: "",
};

const detailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case IMAGE_DETAILS.REQUEST:
      return {
        ...state,
        image: {},
        error: "",
        loading: true,
      };

    case IMAGE_DETAILS.SUCCESS:
      return {
        ...state,
        image: action.image,
        error: "",
        loading: false,
      };

    case IMAGE_DETAILS.ERROR:
      return {
        ...state,
        image: {},
        error: action.error,
        loading: false,
      };

    default:
      return state;
  }
};

export default detailsReducer;
