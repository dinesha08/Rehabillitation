import React, { useState } from "react";
import { Form } from "reactstrap";
import PersonalDetailsInput from "./personalDetails";
import HealthDetailsInput from "./healthDetails";
import KinDetailsInput from "./kinDetails";

const PatientDetailsInput = ({ setPatientDetails, setLoader }) => {
  const [personalDetails, setPersonalDetails] = useState(true);
  const [kinDetails, setKinDetails] = useState(false);
  const [healthDetails, setHealthDetails] = useState(false);

  return (
    <Form>
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
        />
      )}
      {healthDetails && (
        <HealthDetailsInput
          setHealthDetails={setHealthDetails}
          setPatientDetails={setPatientDetails}
          setLoader={setLoader}
        />
      )}
    </Form>
  );
};

export default PatientDetailsInput;
