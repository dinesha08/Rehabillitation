import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  medicalRecords: [],
  patientDetails: {},
};

const PatientDetailSlice = createSlice({
  name: "patientDetails",
  initialState,
  reducers: {
    fetchPatientDetails: (state, { payload }) => {
      state.patientDetails = payload;
    },
    fetchMedicalRecords: (state, { payload }) => {
      state.medicalRecords = payload;
    },
  },
});

export const { fetchPatientDetails } = PatientDetailSlice.actions;
export const { fetchMedicalRecords } = PatientDetailSlice.actions;
export const getAllPatientDetails = (state) =>
  state.patientDetails.patientDetails;
export const getAllMedicalRecords = (state) =>
  state.patientDetails.medicalRecords;
export default PatientDetailSlice.reducer;
