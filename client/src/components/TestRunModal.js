import {useState} from 'react';
import {Button, Col, Modal, Row} from 'react-bootstrap';
import '../App.css';
import { Link, BrowserRouter, Routes, Route} from "react-router-dom";
import TestReport from "./TestReport.js";

export function TestRunModal({data, test_reports}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const columnsPerRow = 2;
       const links = test_reports.map((u) =>
        <>
          <Row className={`result-row-${u.status.toLowerCase()}`} xs={columnsPerRow}>
            <Col xs={7} className="name-column">
              <Link className={`result-link`} id={u.id} to={`/result/${u.id}`} target='_blank'>
                {u.name}
              </Link>
            </Col>
            <Col xs={5} className="status-column">{u.status}</Col>
          </Row>
        </>
      )

    return (
      <>
        <Button key={data.id} className="btn btn-primary" onClick={() => {handleShow()}}>View</Button>

        <Modal show={show} onHide={handleClose} dialogClassName="custom-modal">
          <Modal.Header closeButton>
            <Modal.Title>Link to Individual Test Results:</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row className="custom-header-row" xs={columnsPerRow}>
              <Col xs={7} className="name-column">
                  Name
              </Col>
              <Col xs={5} className="status-column">Status</Col>
            </Row>
            <BrowserRouter>
              <Routes>
                <Route exact path='/' element={<div>{links}</div>}>
                </Route>
                <Route exact path='/result/:id' element={<TestReport />}></Route>
              </Routes>
            </BrowserRouter>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
}
