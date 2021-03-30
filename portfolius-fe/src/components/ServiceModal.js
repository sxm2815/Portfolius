import React, { useState } from 'react';
import { Button, Modal, Image } from 'react-bootstrap';

function ServiceModal(props) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="col-lg-3 col-md-6 col-sm-12" onClick={handleShow}>
        <div className="services">
          <div className="services-img text-center py-4 noselect">
            <Image src={props.src} alt={props.alt} fluid/>
          </div>
          <div className="card-body text-center">
            <h5 className="card-title text-uppercase font-roboto">{props.h5_content}</h5>
            <p className="card-text text-secondary">{props.p_content}</p>  
          </div>
        </div>
      </div> 
      <Modal
        show={show}
        onHide={handleClose}
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered={true}
        animation={true}
        scrollable={true}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            {props.p_content}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ServiceModal
