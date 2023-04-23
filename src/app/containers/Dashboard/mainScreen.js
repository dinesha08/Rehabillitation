import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as operation from "./action";
import ProfileSection from "./profileSection";
import GraphSection from "./graphSection";
import moment from "moment";

const MainScreen = ({
  data,
  setInput,
  setEdit,
  edit,
  setEndTime,
  startTime,
  endTime,
}) => {
  const dispatch = useDispatch();
  const { patientDetails } = useSelector(
    (state) => state.rehabilitationDetails
  );

  const [sessionTime, setSessionTime] = useState();
  const [currentDate, setCurrentDate] = useState(moment().format("DD-MM-YYYY"));

  useEffect(() => {
    if (!edit) {
      dispatch(operation.saveMedicalRecord(patientDetails));
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <ProfileSection
        edit={edit}
        setEndTime={setEndTime}
        startTime={startTime}
        endTime={endTime}
        sessionTime={sessionTime}
        setSessionTime={setSessionTime}
        currentDate={currentDate}
      />
      <GraphSection data={data} />
      <div className="d-flex flex-row-reverse">
        <button
          type="submit"
          className="cssbuttons-io-button mt-3 mb-3 mx-5"
          onClick={() => {
            if (!edit) {
              dispatch(
                operation.updateMedicalRecord({
                  ...patientDetails,
                  generalInfo: {
                    currentDate,
                    sessionTime,
                  },
                })
              );
            } else {
              setEdit(false);
              dispatch(operation.updateMedicalRecord(patientDetails));
            }
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
