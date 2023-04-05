import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import PatientDetailsInput from "./patientDetailsInput";

import "./dashboardStyle.scss";
import Loader from "../../components/Loader";
import MainScreen from "./mainScreen";
import MedicalRecords from "./medicalRecords";

const Dashboard = () => {
  const [data, setData] = useState("");
  const [accelerataion, setAcceleration] = useState("");
  const [brake, setBrake] = useState("");
  const [patientDetail, setPatientDetail] = useState(false);
  const [loader, setLoader] = useState(false);
  const [blankScreen, setBlankScreen] = useState(false);
  const [input, setInput] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:5000/data")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      }); // eslint-disable-next-line
  }, [data]);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
      setBlankScreen(false);
    }, 3000);
  }, [loader, patientDetail]);

  return (
    <Container fluid className="dashboard">
      {!blankScreen && (
        <>
          <Row>
            <Col className="d-flex justify-content-center align-items-center">
              <h1 className="title my-4">Lower Limb Rehabilitation</h1>
            </Col>
          </Row>
          {input ? (
            <>
              {patientDetail ? (
                <>
                  <Card className="card mx-5">
                    <CardBody>
                      <Row>
                        <Col className="mx-5">
                          <PatientDetailsInput
                            setPatientDetail={setPatientDetail}
                            setLoader={setLoader}
                            setBlankScreen={setBlankScreen}
                            setInput={setInput}
                          />
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </>
              ) : (
                <MainScreen data={data} setInput={setInput} />
              )}
            </>
          ) : (
            <MedicalRecords
              setInput={setInput}
              setPatientDetail={setPatientDetail}
            />
          )}
        </>
      )}

      {loader && <Loader />}
    </Container>
  );
};

export default Dashboard;
