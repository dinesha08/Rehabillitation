import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row, Card, CardBody } from "reactstrap";
import * as operation from "./action";

const ShowDetails = ({ setShowDetails }) => {
  const dispatch = useDispatch();
  const { patientDetails } = useSelector(
    (state) => state.rehabilitationDetails
  );
  const [personalDetails, setPersonalDetails] = useState({});
  const [healthDetails, setHealthDetails] = useState({});

  useEffect(() => {
    setPersonalDetails(patientDetails.personalDetails);
    setHealthDetails(patientDetails.healthDetails);
  }, [patientDetails]);

  return (
    <>
      <Card className="card mx-5">
        <CardBody>
          <Row className="d-flex justify-content-center align-items-center">
            <Col className="mx-5 d-flex justify-content-center align-items-center">
              <Col xs="3" className="m-4 text-center">
                <img
                  src={require("./assert/profilePic.png")}
                  className="profilePic"
                  alt="profilePic"
                />
              </Col>
              <Col className="m-4 d-flex flex-column">
                <Row>
                  <Col>
                    <h4>
                      {personalDetails.firstName} {personalDetails.lastName}
                    </h4>
                  </Col>
                </Row>
                <Row className="d-flex align-items-center">
                  <Col>
                    <h6>
                      <span className="key">Gender: </span>
                      <span>{personalDetails.gender}</span>
                    </h6>
                    <h6>
                      <span className="key">Age: </span>
                      <span>{personalDetails.age}</span>
                    </h6>
                    <h6>
                      <span className="key">Mobile Number: </span>
                      <span>+91 {personalDetails.mobileNumber}</span>
                    </h6>
                    <h6>
                      <span className="key">Alternate Mobile Number: </span>
                      <span>+91 {personalDetails.alternateMobileNumber}</span>
                    </h6>
                  </Col>
                  <Col className="m-4">
                    <h6>
                      <span className="key">Height: </span>
                      <span>{healthDetails.height} ft</span>
                    </h6>
                    <h6>
                      <span className="key">Weight: </span>
                      <span>{healthDetails.weight} kg</span>
                    </h6>
                    <h6>
                      <span className="key">Blood Pressure: </span>
                      <span>{healthDetails.bloodPressure} mmHg</span>
                    </h6>
                    <h6>
                      <span className="key">Region of Injury: </span>
                      <span>{healthDetails.regionOfInjury}</span>
                    </h6>
                    <h6>
                      <span className="key">Cause of Injury: </span>
                      <span>{healthDetails.causeOfInjury}</span>
                    </h6>
                  </Col>
                </Row>
              </Col>
            </Col>
          </Row>
        </CardBody>
      </Card>
      <div className="d-flex flex-row-reverse">
        <button
          type="submit"
          className="cssbuttons-io-button mt-3 mb-3 mx-5"
          onClick={() => {
            setShowDetails(false);
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

export default ShowDetails;
