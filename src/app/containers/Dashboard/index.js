import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";

import "./dashboardStyle.scss";

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
    console.log(data);
  }, []);

  return (
    <Container fluid className="dashboard">
      <Row>
        <Col className="d-flex justify-content-center align-items-center">
          <h1 className="title">Rehabilitation</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
