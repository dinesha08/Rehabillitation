import React from "react";
import { Modal, ModalBody } from "reactstrap";

import "./loaderStyle.scss";

const Loader = () => {
  return (
    <Modal
      size="sm"
      centered
      isOpen={true}
      className="modal"
      contentClassName="modalContent"
    >
      <ModalBody className="modalBody d-flex align-items-center justify-content-center">
        <img
          src={require("./assert/loader.gif")}
          alt="Loader"
          className="loader"
        />
      </ModalBody>
    </Modal>
  );
};

export default Loader;
