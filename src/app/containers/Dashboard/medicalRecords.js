import React, { useEffect } from "react";
import { Card, CardBody, Col, Row, Button } from "reactstrap";
import BootstrapTable from "react-bootstrap-table-next";
import * as operation from "./action";

import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import { fetchAllMedicalRecords } from "./action";
import { useDispatch, useSelector } from "react-redux";

const MedicalRecords = ({ setInput, setPatientDetail }) => {
  const dispatch = useDispatch();
  const { medicalRecords } = useSelector(
    (state) => state.rehabilitationDetails
  );

  const columns = [
    {
      dataField: "id",
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
            <i className="fa-solid fa-eye fa-xs mx-2 tableAction"></i>
            <i className="fa-solid fa-pen fa-xs mx-2 text-primary tableAction"></i>
            <i className="fa-solid fa-trash fa-xs mx-2 text-danger tableAction"></i>
          </div>
        );
      },
    },
  ];

  useEffect(() => {
    dispatch(fetchAllMedicalRecords()); // eslint-disable-next-line
  }, []);

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
                classes="table"
                noDataIndication="No Medical Records Found"
              />
            </Col>
          </Row>
        </CardBody>
      </Card>
    </>
  );
};

export default MedicalRecords;
