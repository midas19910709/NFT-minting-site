import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export function SuccModal(val) {
  const [show, setShow] = useState(false);
  setShow(val);

  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)}>
        Custom Width Modal
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Sucess!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Your transaction is approved!</p>
        </Modal.Body>
      </Modal>
    </>
  );
}

// render(<Example />);
