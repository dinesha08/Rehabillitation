import React, { useEffect, useRef } from "react";
import { Card, CardBody, Col, Row, Button } from "reactstrap";
import BootstrapTable from "react-bootstrap-table-next";
import * as operation from "./action";

import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import { fetchAllMedicalRecords } from "./action";
import { useDispatch, useSelector } from "react-redux";
import ReactToPrint from "react-to-print";
import { get } from "lodash";

const MedicalRecords = ({
  setInput,
  setPatientDetail,
  setEdit,
  setStartTime,
}) => {
  const dispatch = useDispatch();
  const reportRef = useRef();

  const { medicalRecords } = useSelector(
    (state) => state.rehabilitationDetails
  );

  const columns = [
    {
      dataField: null,
      text: "ID",
      formatter: (cell, row, rowIndex) => rowIndex + 1,
    },
    {
      dataField: "patientId",
      text: "Patient ID",
      formatter: (cell, row, rowIndex) => row.id,
    },
    {
      dataField: "patientName",
      text: "Name",
      formatter: (cell, row, rowIndex) =>
        row.personalDetails.firstName + " " + row.personalDetails.lastName,
    },
    {
      dataField: "patientAge",
      text: "Age",
      formatter: (cell, row, rowIndex) => row.personalDetails.age,
    },
    {
      dataField: "patientGender",
      text: "Gender",
      formatter: (cell, row, rowIndex) => row.personalDetails.gender,
    },
    {
      datafield: "action",
      text: "Action",
      formatter: (cell, row, rowIndex) => {
        return (
          <div className="d-flex justify-content-center">
            <ReactToPrint
              trigger={() => (
                <i className="fa-solid fa-print fa-xs mx-2 tableAction"></i>
              )}
              content={() => reportRef.current}
            />
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
                      {get(row, "generalInfo.currentDate", "")}
                    </span>
                  </Col>
                  <Col className="end-0">
                    <span className="reportSubTitle">Session Timing: </span>
                    <span className="reportWord">
                      {get(row, "generalInfo.sessionTime", "")}
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
                      {row.personalDetails.firstName +
                        " " +
                        row.personalDetails.lastName}
                    </span>
                  </Col>
                  <Col xs="4" className="d-flex flex-column">
                    <span className="reportWord">
                      Gender: {row.personalDetails.gender}
                    </span>
                  </Col>
                  <Col xs="4" className="d-flex flex-column">
                    <span className="reportWord">
                      Age: {row.personalDetails.age}
                    </span>
                  </Col>
                </Row>
                <Row>
                  <Col xs="4" className="d-flex flex-column">
                    <span className="reportWord">
                      DOB: {row.personalDetails.dob}
                    </span>
                  </Col>
                  <Col xs="4" className="d-flex flex-column">
                    <span className="reportWord">
                      Mobile No.: {row.personalDetails.mobileNumber}
                    </span>
                  </Col>
                  <Col xs="4" className="d-flex flex-column">
                    <span className="reportWord">
                      Alternate Mobile No.:{" "}
                      {row.personalDetails.alternateMobileNumber}
                    </span>
                  </Col>
                </Row>
                <Row>
                  <Col className="d-flex flex-column">
                    <span className="reportWord">
                      Address: {row.personalDetails.address}
                    </span>
                  </Col>
                </Row>
                <Row>
                  <Col xs="4" className="d-flex flex-column">
                    <span className="reportWord">
                      Height: {row.healthDetails.height}
                    </span>
                  </Col>
                  <Col xs="4" className="d-flex flex-column">
                    <span className="reportWord">
                      Weight: {row.healthDetails.weight}
                    </span>
                  </Col>
                  <Col xs="4" className="d-flex flex-column">
                    <span className="reportWord">
                      Blood Pressure: {row.healthDetails.bloodPressure}
                    </span>
                  </Col>
                </Row>
                <Row className="mb-3 mt-3">
                  <Col>
                    <span className="reportSubTitle">
                      Region of Injury: {row.healthDetails.regionOfInjury}
                    </span>
                  </Col>
                </Row>
                <Row className="mb-3 mt-3">
                  <Col>
                    <span className="reportSubTitle">
                      Cause of Injury: {row.healthDetails.causeOfInjury}
                    </span>
                  </Col>
                </Row>
                <Row className="mb-3 mt-3">
                  <Col>
                    <span className="reportSubTitle">
                      Patient's Kin Details:
                    </span>
                  </Col>
                </Row>
                <Row>
                  <Col xs="4" className="d-flex flex-column">
                    <span className="reportWord">
                      Name:{" "}
                      {row.kinDetails.firstName + " " + row.kinDetails.lastName}
                    </span>
                  </Col>
                  <Col xs="4" className="d-flex flex-column">
                    <span className="reportWord">
                      Gender: {row.kinDetails.gender}
                    </span>
                  </Col>
                  <Col xs="4" className="d-flex flex-column">
                    <span className="reportWord">
                      Age: {row.kinDetails.age}
                    </span>
                  </Col>
                </Row>
                <Row>
                  <Col xs="4" className="d-flex flex-column">
                    <span className="reportWord">
                      Mobile No.: {row.kinDetails.mobileNumber}
                    </span>
                  </Col>
                  <Col xs="4" className="d-flex flex-column">
                    <span className="reportWord">
                      Alternate Mobile No.:{" "}
                      {row.kinDetails.alternateMobileNumber}
                    </span>
                  </Col>
                </Row>
                <Row>
                  <Col className="d-flex flex-column">
                    <span className="reportWord">
                      Address: {row.kinDetails.address}
                    </span>
                  </Col>
                </Row>
              </div>
            </div>
            <i
              className="fa-solid fa-pen fa-xs mx-2 text-primary tableAction"
              onClick={() => {
                dispatch(operation.fetchMedicalRecord(row.id));
                setInput(true);
                setPatientDetail(true);
                setEdit(true);
              }}
            ></i>
            <i
              className="fa-solid fa-trash fa-xs mx-2 text-danger tableAction"
              onClick={() => {
                dispatch(operation.removeMedicalRecord(row.id));
              }}
            ></i>
          </div>
        );
      },
    },
  ];

  useEffect(() => {
    dispatch(fetchAllMedicalRecords()); // eslint-disable-next-line
  }, []);

  const expandRow = {
    onlyOneExpanding: true,
    renderer: (row) => {
      return (
        <>
          <Card className="card mx-5">
            <CardBody>
              <Row className="expand-row d-flex justify-content-center align-items-center">
                <Col className="mx-5 d-flex justify-content-center align-items-center">
                  <Col xs="2" />
                  <Col xs="3" className="mx-4 my-2 text-center">
                    <img
                      src={require("./assert/profilePic.png")}
                      className="profilePic"
                      alt="profilePic"
                    />
                  </Col>
                  <Col className="mx-4 d-flex flex-column">
                    <Row className="d-flex align-items-center text-start">
                      <Col xs="6" className="mx-4">
                        <h6>
                          <span className="key">Region of Injury: </span>
                          <span>
                            {row.healthDetails.regionOfInjury || "N/A"}
                          </span>
                        </h6>
                        <h6>
                          <span className="key">Cause of Injury: </span>
                          <span>
                            {row.healthDetails.causeOfInjury || "N/A"}
                          </span>
                        </h6>
                      </Col>
                    </Row>
                  </Col>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </>
      );
    },
  };

  return (
    <>
      <Card className="card mx-5">
        <CardBody>
          <Row className="d-flex align-items-center">
            <Col className="mx-5 text-center mt-3">
              <h2 className="title">Medical Records</h2>
            </Col>
            <Col xs="4" className="btnCol">
              <Button
                className="addMedical"
                onClick={() => {
                  setInput(true);
                  setPatientDetail(true);
                  setStartTime(new Date());
                }}
              >
                + Add Medical Record
              </Button>
              <Button
                className="clearMedical"
                onClick={() => {
                  dispatch(operation.clearMedicalRecords());
                }}
              >
                <i className="fa-solid fa-circle-xmark fa-xs me-2"></i>Clear
                Medical Record
              </Button>
            </Col>
          </Row>
          <Row className="mt-5 mx-5 d-flex justify-content-center">
            <Col className="d-flex justify-content-center">
              {medicalRecords ? (
                <BootstrapTable
                  bootstrap4
                  bordered={false}
                  keyField="id"
                  data={medicalRecords}
                  columns={columns}
                  headerClasses="table-header"
                  rowClasses="table-row"
                  bodyClasses="table-body"
                  classes="table"
                  noDataIndication="No Medical Records Found"
                  expandRow={expandRow}
                />
              ) : (
                "No Medical Records Found"
              )}
            </Col>
          </Row>
        </CardBody>
      </Card>
    </>
  );
};

export default MedicalRecords;
