import { useState } from "react";
import { Modal, Button, Container } from "react-bootstrap";
import websiteImg from "../../../cardImg/website.png";
import "../../../App.css";

export const WebsiteModals = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button variant="secondary" onClick={() => setShow(true)}>
        Visit
      </Button>

      <Modal
        size="md"
        show={show}
        onHide={() => setShow(false)}
        backdrop="static"
      >
        <Modal.Header closeButton>
          Project name: Reactjs PortFolio Website
        </Modal.Header>
        <Modal.Body>
          <div className="websiteImg">
            Description: A PortFolio website with React Library.
            <img src={websiteImg} />
          </div>
        </Modal.Body>
        <Modal.Footer>
          GitHub link:
          <a href="https://github.com/kevin-patel9">View</a>
        </Modal.Footer>
      </Modal>
    </>
  );
};
