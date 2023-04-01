import React from "react";
import { Col, Row, Card, CardBody } from "reactstrap";

const GraphSection = () => {
  return (
    <Card className="card mx-5 mt-3">
      <CardBody>
        <Row className="d-flex justify-content-center align-items-center">
          <Col>
            <Col xs="3" className="m-4 text-center"></Col>
            <Col className="m-4 d-flex flex-column"></Col>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default GraphSection;
