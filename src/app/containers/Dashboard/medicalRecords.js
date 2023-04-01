import React from "react";
import { Card, CardBody, Col, Row, Button } from "reactstrap";

const MedicalRecords = ({ setInput, setPatientDetail }) => {
  return (
    <>
      <Card className="card mx-5">
        <CardBody>
          <Row className="d-flex align-items-center">
            <Col className="mx-5 text-center mt-3">
              <h2 className="title">Medical Records</h2>
            </Col>
            <Button
              className="position-absolute addMedical"
              onClick={() => {
                setInput(true);
                setPatientDetail(true);
              }}
            >
              + Add Medical Record
            </Button>
          </Row>
        </CardBody>
      </Card>
    </>
  );
};

export default MedicalRecords;
