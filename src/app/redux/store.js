import { configureStore } from "@reduxjs/toolkit";
import patientDetailsReducer from "../containers/Dashboard/dashboardSlice";

export const store = configureStore({
  reducer: {
    rehabilitationDetails: patientDetailsReducer,
  },
});
