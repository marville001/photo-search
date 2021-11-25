import { IMAGE_SEARCH } from "../types";

const initialState = {
  images: [],
  image: {},
  loading: false,
  error: "",
};

const imagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case IMAGE_SEARCH.REQUEST:
      return {
        ...state,
        images: [],
        error: "",
        loading: true,
      };
      
    case IMAGE_SEARCH.SUCCESS:
      return {
        ...state,
        images: action.images,
        error: "",
        loading: false,
      };

    case IMAGE_SEARCH.ERROR:
      return {
        ...state,
        images: [],
        error: action.error,
        loading: false,
      };

    default:
      return state;
  }
};

export default imagesReducer;
