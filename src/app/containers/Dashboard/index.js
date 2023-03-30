import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import PatientDetailsInput from "./patientDetailsInput";

import "./dashboardStyle.scss";
import Loader from "../../components/Loader";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [accelerataion, setAcceleration] = useState([]);
  const [brake, setBrake] = useState([]);
  const [patientDetails, setPatientDetails] = useState(true);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:5000/data")
      .then((response) => {
        setData(response.data);
        data.forEach((item) => {
          setAcceleration(item.split(",")[0]);
          const remove = item.split(",")[1];
          setBrake(remove.replace("\r", ""));
        });
        console.log({ Acceleration: accelerataion, Brake: brake });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [data]);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  }, [loader, patientDetails]);

  return (
    <Container fluid className="dashboard">
      <Row>
        <Col className="d-flex justify-content-center align-items-center">
          <h1 className="title my-4">Rehabilitation</h1>
        </Col>
      </Row>
      <Card className="card mx-5">
        <CardBody>
          {patientDetails ? (
            <>
              <Row>
                <Col className="mx-5">
                  <PatientDetailsInput
                    setPatientDetails={setPatientDetails}
                    setLoader={setLoader}
                  />
                </Col>
              </Row>
            </>
          ) : (
            <Row>
              <Col className="text-center">
                <h2 className="title">Graph</h2>
              </Col>
            </Row>
          )}
        </CardBody>
      </Card>
      {loader && <Loader />}
    </Container>
  );
};

export default Dashboard;
