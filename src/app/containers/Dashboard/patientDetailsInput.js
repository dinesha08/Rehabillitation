import React, { useState } from "react";
import { Col, Row } from "reactstrap";
import PersonalDetailsInput from "./personalDetails";
import HealthDetailsInput from "./healthDetails";
import KinDetailsInput from "./kinDetails";

const PatientDetailsInput = ({ setPatientDetail, setLoader }) => {
  const [personalDetails, setPersonalDetails] = useState(true);
  const [kinDetails, setKinDetails] = useState(false);
  const [healthDetails, setHealthDetails] = useState(false);

  return (
    <>
      <Row>
        <Col className="text-center mt-3">
          <h2 className="title">Enter Patient Details</h2>
        </Col>
      </Row>
      {personalDetails && (
        <PersonalDetailsInput
          setPersonalDetails={setPersonalDetails}
          setKinDetails={setKinDetails}
        />
      )}
      {kinDetails && (
        <KinDetailsInput
          setKinDetails={setKinDetails}
          setHealthDetails={setHealthDetails}
          setPersonalDetails={setPersonalDetails}
        />
      )}
      {healthDetails && (
        <HealthDetailsInput
          setHealthDetails={setHealthDetails}
          setPatientDetail={setPatientDetail}
          setKinDetails={setKinDetails}
          setLoader={setLoader}
        />
      )}
    </>
  );
};

export default PatientDetailsInput;
