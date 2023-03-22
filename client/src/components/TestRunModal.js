import React, {useState} from 'react';
import {Button, Modal} from 'react-bootstrap';
import '../App.css';
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import TestRunResults from "./TestRunResults.js";

export function TestRunModal({data}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const links = data.map(u =>
    <>
      <li key="{u.id}">
        <Link className="list-group-item" id={u.id} to='/result' target='_blank'>Test</Link>
      </li>
      <br />
    </>
  )

  return (
    <>
      <Button className="btn btn-primary" onClick={() => {handleShow()}}>View</Button>

      <Modal show={show} onHide={handleClose} dialogClassName="custom-modal">
        <Modal.Header closeButton>
          <Modal.Title>Link to Individual Test Results:</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <BrowserRouter>
            <Routes>
              <Route exact path='/' element={<ul className="list-group list-group-flush">
                {links}
              </ul>}>
              </Route>
              <Route exact path='/result' element={<TestRunResults />}></Route>
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
