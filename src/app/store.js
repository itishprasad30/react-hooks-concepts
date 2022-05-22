import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user";
import themeReducer from "../features/theme";
export default configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer,
  },
});
