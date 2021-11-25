import { IMAGE_SEARCH } from "../types";
import axios from "axios";

const apiRoot = "https://api.unsplash.com";
const accessKey = process.env.REACT_APP_ACCESSKEY;

export const searchImagesAction =(search={}) => async (dispatch) => {
    dispatch({ type: IMAGE_SEARCH.REQUEST });
    console.log({search});
    let url = `${apiRoot}/search/photos/?client_id=${accessKey}`;

    if(search.query) url+= `&query=${search.query}`
    else url+= `&query=computer`;

    if(search.count) url+= `&per_page=${search.count}`
    else url+= `&per_page=10`;

    if(search.color) url+= `&color=${search.color}`;
    if(search.orientation) url+= `&orientation=${search.orientation}`;

    try {
      const { data } = await axios.get(url);
      console.log(data);
      dispatch({
        type: IMAGE_SEARCH.SUCCESS,
        images: data.results,
      });
    } catch (e) {
      dispatch({
        type: IMAGE_SEARCH.ERROR,
        error: e.response.data.errors[0]
      });
    }
  };
