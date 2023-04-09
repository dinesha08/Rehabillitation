import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Input, Label, Row, Form } from "reactstrap";
import { fetchPatientDetails } from "./dashboardSlice";
import { get, random } from "lodash";

const HealthDetailsInput = ({
  setHealthDetails,
  setPatientDetail,
  setKinDetails,
  setLoader,
  setBlankScreen,
}) => {
  const dispatch = useDispatch();
  const { patientDetails } = useSelector(
    (state) => state.rehabilitationDetails
  );

  const initialValues = {
    height: get(patientDetails, "healthDetails.height", ""),
    weight: get(patientDetails, "healthDetails.weight", ""),
    bloodPressure: get(patientDetails, "healthDetails.bloodPressure", ""),
    regionOfInjury: get(patientDetails, "healthDetails.regionOfInjury", ""),
    causeOfInjury: get(patientDetails, "healthDetails.causeOfInjury", ""),
  };

  return (
    <>
      <Form
        initialvalues={initialValues}
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            fetchPatientDetails({
              ...patientDetails,
              id: patientDetails.id || random(100000, 999999),
              healthDetails: {
                height: e.target.height.value,
                weight: e.target.weight.value,
                bloodPressure: e.target.bloodPressure.value,
                regionOfInjury: e.target.regionOfInjury.value,
                causeOfInjury: e.target.causeOfInjury.value,
              },
            })
          );
          setHealthDetails(false);
          setPatientDetail(false);
          setLoader(true);
          setBlankScreen(true);
        }}
      >
        <Row>
          <Col className="d-flex align-items-center">
            <i
              className="fa-solid fa-arrow-left fa-xl p-3 ps-0"
              onClick={() => {
                setKinDetails(true);
                setHealthDetails(false);
              }}
            ></i>
            <h3 className="subTitle">Enter Health Details</h3>
          </Col>
        </Row>
        <Row>
          <Col xs="6">
            <Label className="label">Height (m)</Label>
            <Input
              label="Height"
              name="height"
              placeholder="Height"
              className="input"
              defaultValue={initialValues.height}
            />
          </Col>
          <Col xs="6">
            <Label className="label">Weight (kg)</Label>
            <Input
              label="Weight"
              name="weight"
              placeholder="Weight"
              className="input"
              defaultValue={initialValues.weight}
            />
          </Col>
        </Row>
        <Row>
          <Col xs="6">
            <Label className="label">Blood Pressure (mmHg)</Label>
            <Input
              label="Blood Pressure"
              name="bloodPressure"
              placeholder="Blood Pressure"
              className="input"
              defaultValue={initialValues.bloodPressure}
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
              defaultValue={initialValues.regionOfInjury}
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
              defaultValue={initialValues.causeOfInjury}
            />
          </Col>
        </Row>
        <div className="d-flex flex-row-reverse">
          <button type="submit" className="cssbuttons-io-button mt-3 mb-3 mx-2">
            Save
            <div className="icon">
              <i className="fa-solid fa-floppy-disk text-black"></i>
            </div>
          </button>
        </div>
      </Form>
    </>
  );
};

export default HealthDetailsInput;
