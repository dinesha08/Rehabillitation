import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Col, Row, Card, CardBody } from "reactstrap";

const ProfileSection = () => {
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
                    {personalDetails.firstName || "N/A"}
                    {personalDetails.lastName}
                  </h4>
                </Col>
              </Row>
              <Row className="d-flex align-items-center">
                <Col>
                  <h6>
                    <span className="key">Gender: </span>
                    <span>{personalDetails.gender || "N/A"}</span>
                  </h6>
                  <h6>
                    <span className="key">Age: </span>
                    <span>{personalDetails.age || "N/A"}</span>
                  </h6>
                  <h6>
                    <span className="key">Mobile Number: </span>
                    <span>
                      {personalDetails.mobileNumber
                        ? "+91 " + personalDetails.mobileNumber
                        : "N/A"}
                    </span>
                  </h6>
                  <h6>
                    <span className="key">Alternate Mobile Number: </span>
                    <span>
                      {personalDetails.alternateMobileNumber
                        ? "+91 " + personalDetails.alternateMobileNumber
                        : "N/A"}
                    </span>
                  </h6>
                </Col>
                <Col className="m-4">
                  <h6>
                    <span className="key">Height: </span>
                    <span>
                      {healthDetails.height
                        ? healthDetails.height + " m"
                        : "N/A"}
                    </span>
                  </h6>
                  <h6>
                    <span className="key">Weight: </span>
                    <span>
                      {healthDetails.weight
                        ? healthDetails.weight + " kg"
                        : "N/A"}
                    </span>
                  </h6>
                  <h6>
                    <span className="key">Blood Pressure: </span>
                    <span>
                      {healthDetails.bloodPressure
                        ? healthDetails.bloodPressure + " mmHg"
                        : "N/A"}
                    </span>
                  </h6>
                  <h6>
                    <span className="key">Region of Injury: </span>
                    <span>{healthDetails.regionOfInjury || "N/A"}</span>
                  </h6>
                  <h6>
                    <span className="key">Cause of Injury: </span>
                    <span>{healthDetails.causeOfInjury || "N/A"}</span>
                  </h6>
                </Col>
              </Row>
            </Col>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default ProfileSection;
