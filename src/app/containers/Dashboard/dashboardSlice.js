import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  patientDetails: {},
};

const PatientDetailSlice = createSlice({
  name: "patientDetails",
  initialState,
  reducers: {
    fetchPatientDetails: (state, { payload }) => {
      state.patientDetails = payload;
    },
  },
});

export const { fetchPatientDetails } = PatientDetailSlice.actions;
export const getAllPatientDetails = (state) =>
  state.patientDetails.patientDetails;
export default PatientDetailSlice.reducer;
