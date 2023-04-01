import React from "react";
import { useEffect } from "react";
import {
  Col,
  Row,
  Card,
  Input,
  CardBody,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { useState } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

const GraphSection = ({ accelerataion, brake }) => {
  const [dropdownOpenForAcceleration, setDropdownOpenForAcceleration] =
    useState(false);
  const [dropdownOpenForBrake, setDropdownOpenForBrake] = useState(false);
  const [loadCellforAcceleration, setLoadCellForAcceleration] = useState(2000);
  const [loadCellforBrake, setLoadCellForBrake] = useState(2000);
  const [accelerataionThreshold, setAccelerataionThreshold] = useState([]);
  const [brakeThreshold, setBrakeThreshold] = useState([]);

  useEffect(() => {
    for (let i = 0; i < 10; i++) {
      setAccelerataionThreshold((prevState) => [...prevState, 2000]);
      setBrakeThreshold((prevState) => [...prevState, 2000]);
    }
  }, []);

  const toggleForAcceleration = () =>
    setDropdownOpenForAcceleration((prevState) => !prevState);
  const toggleForBrake = () =>
    setDropdownOpenForBrake((prevState) => !prevState);

  const handleLoadCellForAcceleration = (e) => {
    setAccelerataionThreshold([]);
    if (e.target.innerText === "Stage 1") {
      setLoadCellForAcceleration(2000);
      for (let i = 0; i < 10; i++) {
        setAccelerataionThreshold((prevState) => [...prevState, 2000]);
      }
    }
    if (e.target.innerText === "Stage 2") {
      setLoadCellForAcceleration(4000);
      for (let i = 0; i < 10; i++) {
        setAccelerataionThreshold((prevState) => [...prevState, 4000]);
      }
    }
    if (e.target.innerText === "Stage 3") {
      setLoadCellForAcceleration(6000);
      for (let i = 0; i < 10; i++) {
        setAccelerataionThreshold((prevState) => [...prevState, 6000]);
      }
    }
    if (e.target.innerText === "Stage 4") {
      setLoadCellForAcceleration(8000);
      for (let i = 0; i < 10; i++) {
        setAccelerataionThreshold((prevState) => [...prevState, 8000]);
      }
    }
    if (e.target.value) {
      setAccelerataionThreshold([]);
      setLoadCellForAcceleration(e.target.value);
      for (let i = 0; i < 10; i++) {
        setAccelerataionThreshold((prevState) => [
          ...prevState,
          e.target.value,
        ]);
      }
    }
  };

  const handleLoadCellForBrake = (e) => {
    setBrakeThreshold([]);
    if (e.target.innerText === "Stage 1") {
      setLoadCellForBrake(2000);
      for (let i = 0; i < 10; i++) {
        setBrakeThreshold((prevState) => [...prevState, 2000]);
      }
    }
    if (e.target.innerText === "Stage 2") {
      setLoadCellForBrake(4000);
      for (let i = 0; i < 10; i++) {
        setBrakeThreshold((prevState) => [...prevState, 4000]);
      }
    }
    if (e.target.innerText === "Stage 3") {
      setLoadCellForBrake(6000);
      for (let i = 0; i < 10; i++) {
        setBrakeThreshold((prevState) => [...prevState, 6000]);
      }
    }
    if (e.target.innerText === "Stage 4") {
      setLoadCellForBrake(8000);
      for (let i = 0; i < 10; i++) {
        setBrakeThreshold((prevState) => [...prevState, 8000]);
      }
    }
    if (e.target.value) {
      setBrakeThreshold([]);
      setLoadCellForBrake(e.target.value);
      for (let i = 0; i < 10; i++) {
        setBrakeThreshold((prevState) => [...prevState, e.target.value]);
      }
    }
  };

  const accelerataionData = {
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    datasets: [
      {
        label: "Acceleration",
        data: [2000, 1500, 3000, 6000, 4500, 3000, 1000, 4000, 5500, 6000],
        backgroundColor: ["rgba(0, 197, 167, 0.2)"],
        borderColor: ["rgb(0, 197, 167)"],
        borderWidth: 1,
        cubicInterpolationMode: "monotone",
        fill: true,
      },
      {
        label: "Threshold",
        data: accelerataionThreshold,
        backgroundColor: ["rgba(255, 205, 86, 0.2)"],
        borderColor: ["rgb(255, 205, 86)"],
        borderWidth: 1,
        cubicInterpolationMode: "monotone",
        fill: true,
      },
    ],
  };

  const brakeData = {
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    datasets: [
      {
        label: "Brake",
        data: [2000, 1500, 3000, 6000, 4500, 3000, 1000, 4000, 5500, 6000],
        backgroundColor: ["rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgb(255, 99, 132)"],
        borderWidth: 1,
        cubicInterpolationMode: "monotone",
        fill: true,
      },
      {
        label: "Threshold",
        data: brakeThreshold,
        backgroundColor: ["rgba(255, 205, 86, 0.2)"],
        borderColor: ["rgb(255, 205, 86)"],
        borderWidth: 1,
        cubicInterpolationMode: "monotone",
        fill: true,
      },
    ],
  };

  return (
    <Card className="card mx-5 mb-2 mt-3">
      <CardBody>
        <Row className="d-flex justify-content-center align-items-center">
          <Col xs="6" className="text-center">
            <h5 className="mb-4">Acceleration</h5>
            <Line data={accelerataionData} className="line mb-3" />
            <Row className="d-flex justify-content-center align-items-center">
              <Col xs="5" className="d-flex">
                <Col className="me-3">
                  <Input
                    name="loadCell"
                    placeholder="Load Cell"
                    className="input"
                    value={loadCellforAcceleration}
                    onChange={handleLoadCellForAcceleration}
                  />
                </Col>
                <Col xs="3" className="ms-3 d-flex">
                  <Dropdown
                    isOpen={dropdownOpenForAcceleration}
                    toggle={toggleForAcceleration}
                  >
                    <DropdownToggle
                      caret
                      className="inputDropdown"
                      color="none"
                    />
                    <DropdownMenu className="dropDownMenu">
                      <DropdownItem
                        className="dropMenuItem"
                        onClick={handleLoadCellForAcceleration}
                      >
                        Stage 1
                      </DropdownItem>
                      <DropdownItem divider className="dropDownDivider" />
                      <DropdownItem
                        className="dropMenuItem"
                        onClick={handleLoadCellForAcceleration}
                      >
                        Stage 2
                      </DropdownItem>
                      <DropdownItem divider className="dropDownDivider" />
                      <DropdownItem
                        className="dropMenuItem"
                        onClick={handleLoadCellForAcceleration}
                      >
                        Stage 3
                      </DropdownItem>
                      <DropdownItem divider className="dropDownDivider" />
                      <DropdownItem
                        className="dropMenuItem"
                        onClick={handleLoadCellForAcceleration}
                      >
                        Stage 4
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </Col>
              </Col>
            </Row>
          </Col>
          <Col xs="6" className=" d-flex flex-column">
            <h5 className="mb-4 text-center">Brake</h5>
            <Line data={brakeData} className="line mb-3" />
            <Row className="d-flex justify-content-center align-items-center">
              <Col xs="5" className="d-flex">
                <Col className="me-3">
                  <Input
                    name="loadCell"
                    placeholder="Load Cell"
                    className="input"
                    value={loadCellforBrake}
                    onChange={(e) => setLoadCellForBrake(e.target.value)}
                  />
                </Col>
                <Col xs="3" className="ms-3 d-flex">
                  <Dropdown
                    isOpen={dropdownOpenForBrake}
                    toggle={toggleForBrake}
                  >
                    <DropdownToggle
                      caret
                      className="inputDropdown"
                      color="none"
                    />
                    <DropdownMenu className="dropDownMenu">
                      <DropdownItem
                        className="dropMenuItem"
                        onClick={handleLoadCellForBrake}
                      >
                        Stage 1
                      </DropdownItem>
                      <DropdownItem divider className="dropDownDivider" />
                      <DropdownItem
                        className="dropMenuItem"
                        onClick={handleLoadCellForBrake}
                      >
                        Stage 2
                      </DropdownItem>
                      <DropdownItem divider className="dropDownDivider" />
                      <DropdownItem
                        className="dropMenuItem"
                        onClick={handleLoadCellForBrake}
                      >
                        Stage 3
                      </DropdownItem>
                      <DropdownItem divider className="dropDownDivider" />
                      <DropdownItem
                        className="dropMenuItem"
                        onClick={handleLoadCellForBrake}
                      >
                        Stage 4
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </Col>
              </Col>
            </Row>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default GraphSection;
