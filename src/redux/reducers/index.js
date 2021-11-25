import { combineReducers } from "redux";
import imagesReducer from "./imageSearch";
import detailsReducer from "./imageDetails";

const rootReducer = combineReducers({
    images: imagesReducer,
    details: detailsReducer
})

export default rootReducer;