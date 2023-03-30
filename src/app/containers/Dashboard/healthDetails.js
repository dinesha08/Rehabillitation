import React from "react";
import { Col, Input, Label, Row } from "reactstrap";

const HealthDetailsInput = ({
  setHealthDetails,
  setPatientDetails,
  setLoader,
}) => {
  return (
    <>
      <Row>
        <Col xs="6">
          <Label className="label">Height</Label>
          <Input
            label="Height"
            name="height"
            placeholder="Height"
            className="input"
          />
        </Col>
        <Col xs="6">
          <Label className="label">Weight</Label>
          <Input
            label="Weight"
            name="weight"
            placeholder="Weight"
            className="input"
          />
        </Col>
      </Row>
      <Row>
        <Col xs="6">
          <Label className="label">Blood Pressure</Label>
          <Input
            label="Blood Pressure"
            name="bloodPressure"
            placeholder="Blood Pressure"
            className="input"
          />
        </Col>
      </Row>
      <Row>
        <Col xs="6">
          <Label className="label">Region of Injury</Label>
          <Input
            label="Region of Injury"
            name="regionOfInjury"
            placeholder="Region of Injury"
            className="textArea"
            type="textarea"
          />
        </Col>
        <Col xs="6">
          <Label className="label">Cause of Injury</Label>
          <Input
            label="Cause of Injury"
            name="causeOfInjury"
            placeholder="Cause of Injury"
            className="textArea"
            type="textarea"
          />
        </Col>
      </Row>
      <div className="d-flex flex-row-reverse">
        <button
          onClick={() => {
            setHealthDetails(false);
            setPatientDetails(false);
            setLoader(true);
          }}
          className="cssbuttons-io-button mt-3 mb-3 mx-2"
        >
          Save
          <div className="icon">
            <svg
              height="24"
              width="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </button>
      </div>
    </>
  );
};

export default HealthDetailsInput;
