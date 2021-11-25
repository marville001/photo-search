import { IMAGE_DETAILS } from "../types";
import axios from "axios";

const apiRoot = "https://api.unsplash.com";
const accessKey = process.env.REACT_APP_ACCESSKEY;

export const getImageDetailsAction =(id) => async (dispatch) => {
    dispatch({ type: IMAGE_DETAILS.REQUEST });
    let url = `${apiRoot}/photos/${id}?client_id=${accessKey}`;
    try {
      const { data } = await axios.get(url);
      dispatch({
        type: IMAGE_DETAILS.SUCCESS,
        image: data,
      });
    } catch (e) {
      dispatch({
        type: IMAGE_DETAILS.ERROR,
        error: e.response.data.errors[0],
      });
    }
  };
