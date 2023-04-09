import { map } from "lodash";
import { fetchMedicalRecords, fetchPatientDetails } from "./dashboardSlice";

export const fetchAllMedicalRecords = () => {
  return async (dispatch) => {
    let medicalRecords = localStorage.getItem("medicalRecords");
    // medicalRecords = JSON.parse(medicalRecords);
    // localStorage.setItem("medicalRecords", JSON.stringify([medicalRecords[0]]));
    dispatch(fetchMedicalRecords(JSON.parse(medicalRecords)));
  };
};

export const saveMedicalRecord = (medicalRecord) => {
  return async (dispatch) => {
    let medicalRecords = JSON.parse(localStorage.getItem("medicalRecords"));
    medicalRecords = medicalRecords ? medicalRecords : [];
    localStorage.setItem(
      "medicalRecords",
      JSON.stringify([...medicalRecords, medicalRecord])
    );
    dispatch(fetchMedicalRecords(medicalRecords));
  };
};

export const fetchMedicalRecord = (id) => {
  return async (dispatch) => {
    let medicalRecord = {};
    let medicalRecords = localStorage.getItem("medicalRecords");
    medicalRecords = JSON.parse(medicalRecords);
    map(medicalRecords, (record) => {
      if (record.id === id) {
        medicalRecord = record;
      }
    });
    await dispatch(fetchPatientDetails(medicalRecord));
  };
};

export const updateMedicalRecord = (medicalRecord) => {
  return async (dispatch) => {
    let medicalRecords = JSON.parse(localStorage.getItem("medicalRecords"));
    medicalRecords = medicalRecords.map((record) => {
      if (record.id === medicalRecord.id) {
        return medicalRecord;
      } else {
        return record;
      }
    });
    localStorage.setItem("medicalRecords", JSON.stringify(medicalRecords));
    dispatch(fetchMedicalRecords(medicalRecords));
  };
};

export const removeMedicalRecord = (id) => {
  return async (dispatch) => {
    let medicalRecords = JSON.parse(localStorage.getItem("medicalRecords"));
    medicalRecords = medicalRecords.filter((record) => record.id !== id);
    localStorage.setItem("medicalRecords", JSON.stringify(medicalRecords));
    dispatch(fetchMedicalRecords(medicalRecords));
  };
};

export const clearMedicalRecords = () => {
  return async (dispatch) => {
    localStorage.setItem("medicalRecords", JSON.stringify([]));
    dispatch(fetchMedicalRecords([]));
  };
};

export const clearMedicalRecord = () => {
  return async (dispatch) => {
    dispatch(fetchPatientDetails({}));
  };
};
