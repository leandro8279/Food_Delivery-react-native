import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import rootReducer from "../slices";
export default configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger),
});
