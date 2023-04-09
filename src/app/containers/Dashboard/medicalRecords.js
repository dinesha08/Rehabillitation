import React, { useEffect } from "react";
import { Card, CardBody, Col, Row, Button } from "reactstrap";
import BootstrapTable from "react-bootstrap-table-next";
import * as operation from "./action";

import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import { fetchAllMedicalRecords } from "./action";
import { useDispatch, useSelector } from "react-redux";

const MedicalRecords = ({ setInput, setPatientDetail, setEdit }) => {
  const dispatch = useDispatch();
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
            <i className="fa-solid fa-print fa-xs mx-2 tableAction"></i>
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
          <Row className="mt-5 mx-5">
            <Col>
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
            </Col>
          </Row>
        </CardBody>
      </Card>
    </>
  );
};

export default MedicalRecords;
