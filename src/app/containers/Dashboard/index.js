import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "reactstrap";


import "./dashboardStyle.scss";

const Dashboard = () => {
  const [port, setPort] = useState(null);

  const handleClick = () => {
    navigator.serial.requestPort().then((serialPort) => {
      setPort(serialPort)
    });
  }

  useEffect(() => {
    if (port) {
      // Open the serial port and start reading data
      port.open({ baudRate: 9600 }).then(() => {
        const reader = port.readable.getReader();
        reader.read().then(function processResult(result) {
          console.log(result); 
        });
      });
    }
  }, [port]);

  return (
    <Container fluid className="dashboard p-0">
      <Row>
        <Col>Test</Col>
        <Button onClick={()=> handleClick()}>Click</Button>
      </Row>
    </Container>
  );
};

export default Dashboard;
