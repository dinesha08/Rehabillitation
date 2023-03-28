import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";

import "./dashboardStyle.scss";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [accelerataion, setAcceleration] = useState([]);
  const [brake, setBrake] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/data")
      .then((response) => {
        setData(response.data)
        data.forEach((item) => {
          setAcceleration(item.split(",")[0]);
          const remove = item.split(",")[1]
          setBrake(remove.replace("\r",""))
        })
        console.log({Acceleration: accelerataion, Brake: brake})
      })
      .catch((error) => {
        console.log(error);
      });
  }, [data]);

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
