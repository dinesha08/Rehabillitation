import React, { useState } from "react";
import { Form } from "reactstrap";
import PersonalDetailsInput from "./personalDetails";
import HealthDetailsInput from "./healthDetails";

const PatientDetailsInput = ({ setPatientDetails, setLoader }) => {
  const [personalDetails, setPersonalDetails] = useState(true);
  const [healthDetails, setHealthDetails] = useState(false);

  return (
    <Form>
      {personalDetails ? (
        <PersonalDetailsInput
          setPersonalDetails={setPersonalDetails}
          setHealthDetails={setHealthDetails}
        />
      ) : (
        healthDetails && (
          <HealthDetailsInput
            setHealthDetails={setHealthDetails}
            setPatientDetails={setPatientDetails}
            setLoader={setLoader}
          />
        )
      )}
    </Form>
  );
};

export default PatientDetailsInput;
