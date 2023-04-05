import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as operation from "./action";
import ProfileSection from "./profileSection";
import GraphSection from "./graphSection";

const MainScreen = ({data, setInput }) => {
  const dispatch = useDispatch();
  const { patientDetails } = useSelector(
    (state) => state.rehabilitationDetails
  );

  useEffect(() => {
    dispatch(operation.saveMedicalRecord(patientDetails)); // eslint-disable-next-line
  }, []);

  return (
    <>
      <ProfileSection />
      <GraphSection data={data} />
      <div className="d-flex flex-row-reverse">
        <button
          type="submit"
          className="cssbuttons-io-button mt-3 mb-3 mx-5"
          onClick={() => {
            setInput(false);
            dispatch(operation.clearMedicalRecord());
          }}
        >
          Close
          <div className="icon">
            <i className="fa-solid fa-circle-xmark text-black"></i>
          </div>
        </button>
      </div>
    </>
  );
};

export default MainScreen;
