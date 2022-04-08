import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function ModalEdit() {
  return (
    <div style={{ display: "block", width: 700, padding: 30 }}>
      <h4>React-Bootstrap Modal Component</h4>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Sample Modal Heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>This is the sample text for our Modal</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary">Save changes</Button>
          <Button variant="secondary">Close</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}
