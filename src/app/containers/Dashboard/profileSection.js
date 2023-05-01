import { get } from "lodash";
import React, { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import ReactToPrint from "react-to-print";
import { Col, Row, Card, CardBody } from "reactstrap";

const ProfileSection = ({
  edit,
  setEndTime,
  startTime,
  endTime,
  sessionTime,
  setSessionTime,
  currentDate,
}) => {
  const reportRef = useRef();

  const { patientDetails } = useSelector(
    (state) => state.rehabilitationDetails
  );
  const [personalDetails, setPersonalDetails] = useState({});
  const [kinDetails, setKinDetails] = useState({});
  const [healthDetails, setHealthDetails] = useState({});

  useEffect(() => {
    setPersonalDetails(patientDetails.personalDetails);
    setKinDetails(patientDetails.kinDetails);
    setHealthDetails(patientDetails.healthDetails);
  }, [patientDetails]);

  useEffect(() => {
    setEndTime(new Date());
    if (startTime && endTime && !edit) {
      const difference = endTime.getTime() - startTime.getTime();
      const hours = Math.floor(difference / 3600000);
      const minutes = Math.floor((difference % 3600000) / 60000);
      const seconds = Math.floor((difference % 60000) / 1000);
      setSessionTime(
        `${hours.toString().padStart(2, "0")} hr ${minutes
          .toString()
          .padStart(2, "0")} min ${seconds.toString().padStart(2, "0")} sec`
      );
    } else {
      setSessionTime(0);
    } // eslint-disable-next-line
  }, [startTime, endTime, setEndTime]);

  return (
    <Card className="card mx-5">
      <CardBody>
        <ReactToPrint
          trigger={() => (
            <i className="fa-solid fa-print position-absolute top-0 end-0 m-4 printBtn"></i>
          )}
          content={() => reportRef.current}
        />
        <Row className="d-flex justify-content-center align-items-center">
          <Col className="mx-5 d-flex justify-content-center align-items-center">
            <Col xs="3" className="mx-4 my-2 text-center">
              <img
                src={require("./assert/profilePic.png")}
                className="profilePic"
                alt="profilePic"
              />
            </Col>
            <Col className="mx-4 d-flex flex-column">
              <Row>
                <Col>
                  <h4>
                    {personalDetails.firstName || "N/A"}{" "}
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
                </Col>
                <Col className="mx-4">
                  <h6>
                    <span className="key">Height: </span>
                    <span>
                      {healthDetails.height
                        ? healthDetails.height + " ft"
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
                </Col>
                <Col xs="6" className="mx-4">
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
        <div className="d-none">
          <div ref={reportRef} className="text-black mx-5">
            <Row className="mb-5 mt-3 text-center">
              <Col>
                <span className="printTitle">
                  Lower Limb Rehabilitation Report
                </span>
              </Col>
            </Row>
            <Row className="mb-3 mt-3">
              <Col>
                <span className="reportSubTitle">Date: </span>
                <span className="reportWord">
                  {get(patientDetails, "generalInfo.currentDate", currentDate)}
                </span>
              </Col>
              <Col className="end-0">
                <span className="reportSubTitle">Session Timing: </span>
                <span className="reportWord">
                  {get(patientDetails, "generalInfo.sessionTime", sessionTime)}
                </span>
              </Col>
            </Row>
            <Row className="mb-3 mt-3">
              <Col>
                <span className="reportSubTitle">Patient Details:</span>
              </Col>
            </Row>
            <Row>
              <Col xs="4" className="d-flex flex-column">
                <span className="reportWord">
                  Name:{" "}
                  {personalDetails.firstName + " " + personalDetails.lastName}
                </span>
              </Col>
              <Col xs="4" className="d-flex flex-column">
                <span className="reportWord">
                  Gender: {personalDetails.gender}
                </span>
              </Col>
              <Col xs="4" className="d-flex flex-column">
                <span className="reportWord">Age: {personalDetails.age}</span>
              </Col>
            </Row>
            <Row>
              <Col xs="4" className="d-flex flex-column">
                <span className="reportWord">DOB: {personalDetails.dob}</span>
              </Col>
              <Col xs="4" className="d-flex flex-column">
                <span className="reportWord">
                  Mobile No.: {personalDetails.mobileNumber}
                </span>
              </Col>
              <Col xs="4" className="d-flex flex-column">
                <span className="reportWord">
                  Alternate Mobile No.: {personalDetails.alternateMobileNumber}
                </span>
              </Col>
            </Row>
            <Row>
              <Col className="d-flex flex-column">
                <span className="reportWord">
                  Address: {personalDetails.address}
                </span>
              </Col>
            </Row>
            <Row>
              <Col xs="4" className="d-flex flex-column">
                <span className="reportWord">
                  Height: {healthDetails.height}
                </span>
              </Col>
              <Col xs="4" className="d-flex flex-column">
                <span className="reportWord">
                  Weight: {healthDetails.weight}
                </span>
              </Col>
              <Col xs="4" className="d-flex flex-column">
                <span className="reportWord">
                  Blood Pressure: {healthDetails.bloodPressure}
                </span>
              </Col>
            </Row>
            <Row className="mb-3 mt-3">
              <Col>
                <span className="reportSubTitle">
                  Region of Injury: {healthDetails.regionOfInjury}
                </span>
              </Col>
            </Row>
            <Row className="mb-3 mt-3">
              <Col>
                <span className="reportSubTitle">
                  Cause of Injury: {healthDetails.causeOfInjury}
                </span>
              </Col>
            </Row>
            <Row className="mb-3 mt-3">
              <Col>
                <span className="reportSubTitle">Patient's Kin Details:</span>
              </Col>
            </Row>
            <Row>
              <Col xs="4" className="d-flex flex-column">
                <span className="reportWord">
                  Name: {kinDetails.firstName + " " + kinDetails.lastName}
                </span>
              </Col>
              <Col xs="4" className="d-flex flex-column">
                <span className="reportWord">Gender: {kinDetails.gender}</span>
              </Col>
              <Col xs="4" className="d-flex flex-column">
                <span className="reportWord">Age: {kinDetails.age}</span>
              </Col>
            </Row>
            <Row>
              <Col xs="4" className="d-flex flex-column">
                <span className="reportWord">
                  Mobile No.: {kinDetails.mobileNumber}
                </span>
              </Col>
              <Col xs="4" className="d-flex flex-column">
                <span className="reportWord">
                  Alternate Mobile No.: {kinDetails.alternateMobileNumber}
                </span>
              </Col>
            </Row>
            <Row>
              <Col className="d-flex flex-column">
                <span className="reportWord">
                  Address: {kinDetails.address}
                </span>
              </Col>
            </Row>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default ProfileSection;
