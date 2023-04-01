import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Col,
  Input,
  Label,
  Row,
  Form,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { fetchPatientDetails } from "./dashboardSlice";
import moment from "moment/moment";

const PersonalDetailsInput = ({ setPersonalDetails, setKinDetails }) => {
  const dispatch = useDispatch();
  const { patientDetails } = useSelector(
    (state) => state.rehabilitationDetails
  );

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [gender, setGender] = useState();

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const handleGender = (e) => {
    setGender(e.target.innerText);
  };

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(
          fetchPatientDetails({
            ...patientDetails,
            personalDetails: {
              firstName: e.target.firstName.value,
              lastName: e.target.lastName.value,
              gender: gender,
              age: e.target.age.value,
              dob: moment(e.target.dob.value).format("DD-MM-YYYY"),
              address: e.target.address.value,
              mobileNumber: e.target.mobileNumber.value,
              alternateMobileNumber: e.target.alternateMobileNumber.value,
            },
          })
        );
        setPersonalDetails(false);
        setKinDetails(true);
      }}
    >
      <Row>
        <Col xs="6">
          <Label className="label">First Name</Label>
          <Input name="firstName" placeholder="First Name" className="input" />
        </Col>
        <Col xs="6">
          <Label className="label">Last Name</Label>
          <Input name="lastName" placeholder="Last Name" className="input" />
        </Col>
      </Row>
      <Row>
        <Col xs="6">
          <Label className="label">Gender</Label>
          <Row className="d-flex align-items-center">
            <Col xs="10">
              <Input
                name="gender"
                placeholder="Gender"
                className="input"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              />
            </Col>
            <Col className="d-flex justify-content-end">
              <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle caret className="input" color="none" />
                <DropdownMenu className="dropDownMenu">
                  <DropdownItem className="dropMenuItem" onClick={handleGender}>
                    Male
                  </DropdownItem>
                  <DropdownItem divider className="dropDownDivider" />
                  <DropdownItem className="dropMenuItem" onClick={handleGender}>
                    Female
                  </DropdownItem>
                  <DropdownItem divider className="dropDownDivider" />
                  <DropdownItem className="dropMenuItem" onClick={handleGender}>
                    Others
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </Col>
          </Row>
        </Col>
        <Col xs="6">
          <Label className="label">Age</Label>
          <Input name="age" placeholder="Age" className="input" />
        </Col>
      </Row>
      <Row>
        <Col xs="6">
          <Label className="label">Date of Birth</Label>
          <Input
            name="dob"
            className="input"
            placeholder="Date of Birth"
            onFocus={(e) => {
              e.target.type = "date";
            }}
          />
        </Col>
        <Col xs="6">
          <Label className="label">Address</Label>
          <Input name="address" placeholder="Address" className="input" />
        </Col>
      </Row>
      <Row>
        <Col xs="6">
          <Label className="label">Mobile Number</Label>
          <Input
            name="mobileNumber"
            placeholder="Mobile Number"
            className="input"
          />
        </Col>
        <Col xs="6">
          <Label className="label">Alternate Mobile Number</Label>
          <Input
            name="alternateMobileNumber"
            placeholder="Alternate Mobile Number"
            className="input"
          />
        </Col>
      </Row>
      <div className="d-flex flex-row-reverse">
        <button type="submit" className="cssbuttons-io-button mt-3 mb-3 mx-2">
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
    </Form>
  );
};

export default PersonalDetailsInput;
