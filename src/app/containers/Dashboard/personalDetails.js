import React, { useState } from "react";
import { Col, Input, Label, Row } from "reactstrap";

const PersonalDetailsInput = ({ setPersonalDetails, setKinDetails }) => {
  return (
    <>
      <Row>
        <Col className="text-center">
          <h2 className="title">Enter Patient Details</h2>
        </Col>
      </Row>
      <Row>
        <Col xs="6">
          <Label className="label">First Name</Label>
          <Input
            label="First Name"
            name="firstName"
            placeholder="First Name"
            className="input"
          />
        </Col>
        <Col xs="6">
          <Label className="label">Last Name</Label>
          <Input
            label="Last Name"
            name="lastName"
            placeholder="Last Name"
            className="input"
          />
        </Col>
      </Row>
      <Row>
        <Col xs="6">
          <Label className="label">Gender</Label>
          <Input
            label="Gender"
            name="gender"
            placeholder="Gender"
            className="input"
          />
        </Col>
        <Col xs="6">
          <Label className="label">Age</Label>
          <Input label="Age" name="age" placeholder="Age" className="input" />
        </Col>
      </Row>
      <Row>
        <Col xs="6">
          <Label className="label">Date of Birth</Label>
        </Col>
        <Col xs="6">
          <Label className="label">Address</Label>
          <Input
            label="Address"
            name="address"
            placeholder="Address"
            className="input"
          />
        </Col>
      </Row>
      <Row>
        <Col xs="6">
          <Label className="label">Mobile Number</Label>
          <Input
            label="Mobile Number"
            name="mobileNumber"
            placeholder="Mobile Number"
            className="input"
          />
        </Col>
        <Col xs="6">
          <Label className="label">Alternate Mobile Number</Label>
          <Input
            label="Alternate Mobile Number"
            name="alternateMobileNumber"
            placeholder="Alternate Mobile Number"
            className="input"
          />
        </Col>
      </Row>
      <div className="d-flex flex-row-reverse">
        <button
          onClick={() => {
            setPersonalDetails(false);
            setKinDetails(true);
          }}
          className="cssbuttons-io-button mt-3 mb-3 mx-2"
        >
          Next
          <div className="icon">
            <svg
              height="24"
              width="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </button>
      </div>
    </>
  );
};

export default PersonalDetailsInput;
