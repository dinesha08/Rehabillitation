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
import { useToast } from "@hanseo0507/react-toast";

const GraphSection = ({ data }) => {
  const { toast } = useToast();

  const [dropdownOpenForAcceleration, setDropdownOpenForAcceleration] =
    useState(false);
  const [dropdownOpenForBrake, setDropdownOpenForBrake] = useState(false);
  const [loadCellforAcceleration, setLoadCellForAcceleration] = useState(3000);
  const [loadCellforBrake, setLoadCellForBrake] = useState(4000);
  const [accelerataionThreshold, setAccelerataionThreshold] = useState([]);
  const [brakeThreshold, setBrakeThreshold] = useState([]);
  const [accelerationGraphData, setAccelerationGraphData] = useState(
    new Array(101).fill(0)
  );
  const [brakeGraphData, setBrakeGraphData] = useState(new Array(101).fill(0));

  useEffect(() => {
    if (accelerationGraphData.length >= 101) {
      accelerationGraphData.splice(0, 1);
      setAccelerationGraphData((prevState) => [
        ...prevState,
        data.acceleration,
      ]);
    } else {
      setAccelerationGraphData((prevState) => [
        ...prevState,
        data.acceleration,
      ]);
    }

    if (data.acceleration >= loadCellforAcceleration) {
      setStageAcceleration1(true);
      toast({
        emoji: "🦶",
        emojiBackground: "#8f9ac2",
        text: "Reached Milestone",
      });
    }
    // eslint-disable-next-line
  }, [data.acceleration]);

  useEffect(() => {
    if (brakeGraphData.length >= 101) {
      brakeGraphData.splice(0, 1);
      setBrakeGraphData((prevState) => [...prevState, data.brake]);
    } else {
      setBrakeGraphData((prevState) => [...prevState, data.brake]);
    }
    data.brake >= loadCellforBrake &&
      toast({
        emoji: "🦶",
        emojiBackground: "#8f9ac2",
        text: "Reached Milestone",
      });
    // eslint-disable-next-line
  }, [data.brake]);

  useEffect(() => {
    for (let i = 0; i < 100; i++) {
      setAccelerataionThreshold((prevState) => [...prevState, 3000]);
      setBrakeThreshold((prevState) => [...prevState, 4000]);
    }
  }, []);

  const toggleForAcceleration = () =>
    setDropdownOpenForAcceleration((prevState) => !prevState);
  const toggleForBrake = () =>
    setDropdownOpenForBrake((prevState) => !prevState);

  const handleLoadCellForAcceleration = (e) => {
    setAccelerataionThreshold([]);
    if (e.target.innerText === "Stage 1") {
      setLoadCellForAcceleration(3000);
      for (let i = 0; i < 100; i++) {
        setAccelerataionThreshold((prevState) => [...prevState, 3000]);
      }
    }
    if (e.target.innerText === "Stage 2") {
      setLoadCellForAcceleration(5000);
      for (let i = 0; i < 100; i++) {
        setAccelerataionThreshold((prevState) => [...prevState, 5000]);
      }
    }
    if (e.target.innerText === "Stage 3") {
      setLoadCellForAcceleration(7000);
      for (let i = 0; i < 100; i++) {
        setAccelerataionThreshold((prevState) => [...prevState, 7000]);
      }
    }
    if (e.target.innerText === "Stage 4") {
      setLoadCellForAcceleration(10000);
      for (let i = 0; i < 100; i++) {
        setAccelerataionThreshold((prevState) => [...prevState, 10000]);
      }
    }
    if (e.target.value) {
      setAccelerataionThreshold([]);
      setLoadCellForAcceleration(e.target.value);
      for (let i = 0; i < 100; i++) {
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
      setLoadCellForBrake(4000);
      for (let i = 0; i < 100; i++) {
        setBrakeThreshold((prevState) => [...prevState, 4000]);
      }
    }
    if (e.target.innerText === "Stage 2") {
      setLoadCellForBrake(6000);
      for (let i = 0; i < 100; i++) {
        setBrakeThreshold((prevState) => [...prevState, 6000]);
      }
    }
    if (e.target.innerText === "Stage 3") {
      setLoadCellForBrake(8000);
      for (let i = 0; i < 100; i++) {
        setBrakeThreshold((prevState) => [...prevState, 8000]);
      }
    }
    if (e.target.innerText === "Stage 4") {
      setLoadCellForBrake(10000);
      for (let i = 0; i < 100; i++) {
        setBrakeThreshold((prevState) => [...prevState, 10000]);
      }
    }
    if (e.target.innerText === "Stage 5") {
      setLoadCellForBrake(12000);
      for (let i = 0; i < 100; i++) {
        setBrakeThreshold((prevState) => [...prevState, 12000]);
      }
    }
    if (e.target.value) {
      setBrakeThreshold([]);
      setLoadCellForBrake(e.target.value);
      for (let i = 0; i < 100; i++) {
        setBrakeThreshold((prevState) => [...prevState, e.target.value]);
      }
    }
  };

  const accelerationData = {
    labels: Array.from({ length: 100 }, (_, i) => i + 1),
    datasets: [
      {
        label: "Acceleration",
        data: accelerationGraphData,
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

  const accelerationConfig = {
    type: "line",
    data: accelerationData,
    options: {
      scales: {
        y: {
          beginAtZero: true,
          suggestedMin: 0,
          suggestedMax: 10000,
        },
      },
    },
  };

  const brakeData = {
    labels: Array.from({ length: 100 }, (_, i) => i + 1),
    datasets: [
      {
        label: "Brake",
        data: brakeGraphData,
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

  const brakeConfig = {
    type: "line",
    data: brakeData,
    options: {
      scales: {
        y: {
          beginAtZero: true,
          suggestedMin: 0,
          suggestedMax: 10000,
        },
      },
    },
  };

  return (
    <Card className="card mx-5 mb-2 mt-3">
      <CardBody>
        <Row className="d-flex justify-content-center align-items-center">
          <Col xs="6" className="text-center">
            <h5 className="mb-4">Acceleration</h5>
            <Line {...accelerationConfig} className="line mb-3" />
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
              <Col xs="5" className="d-flex">
                <Col className="me-3">
                  <span className="title">Force</span>
                </Col>
                <Col xs="3" className="ms-3 d-flex">
                  {data.accelerationForce
                    ? data.accelerationForce + " N"
                    : "N/A"}
                </Col>
              </Col>
            </Row>
          </Col>
          <Col xs="6" className=" d-flex flex-column">
            <h5 className="mb-4 text-center">Brake</h5>
            <Line {...brakeConfig} className="line mb-3" />
            <Row className="d-flex justify-content-center align-items-center">
              <Col xs="5" className="d-flex">
                <Col className="me-3">
                  <Input
                    name="loadCell"
                    placeholder="Load Cell"
                    className="input"
                    value={loadCellforBrake}
                    onChange={handleLoadCellForBrake}
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
                      <DropdownItem divider className="dropDownDivider" />
                      <DropdownItem
                        className="dropMenuItem"
                        onClick={handleLoadCellForBrake}
                      >
                        Stage 5
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </Col>
              </Col>
              <Col xs="5" className="d-flex">
                <Col className="me-3 text-center">
                  <span className="title text-center">Force</span>
                </Col>
                <Col xs="3" className="ms-3 d-flex">
                  {data.brakeForce ? data.brakeForce + "N" : "N/A"}
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
