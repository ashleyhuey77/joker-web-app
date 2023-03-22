import React, {Component, useState} from 'react';
import axios from '../axios.js';
import {Button, Card, Modal} from 'react-bootstrap';
import styles from '../App.css';


export class ViewButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    };
  }

  render() {
    return (
      <div>
        <Button className={styles.btnPrimary} onClick={() => {
          this.state = true;
        }}>View</Button>
        <ResultsModal isActive={this.state}></ResultsModal>
      </div>
    )
  }
};

export function ResultsModal({isActive}) {
  let [isActive, setIsActive] = useState(false);

  const closeModal = () => isActive = false;

    return (
      <Modal show={isActive} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    )
}


export default class TestRunResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      RunResults: []
    };
  }

  componentDidMount(){
    this.getAllTestRuns();
  }
  getAllTestRuns = () => {
    axios.get(`test/runs`, {})
      .then((response) => {
        const allRuns = response.data;
        console.log(allRuns);
        const runs = allRuns.map(u =>
          <Card style={{ width: '18rem' }} className='m-2' key='{runs.id}'>
            <Card.Body>
                <Card.Title className={styles.cardTitle}>
                  {u.name}
                </Card.Title>
                <Card.Text>
                  <div>
                    <div className="panel-body">
                      <div>Browser: {u.browser}</div>
                      <div>Environment: {u.env}</div>
                      <div>Endpoint: {u.endpoint}</div>
                    </div>
                  </div>
                </Card.Text>
                <ViewButton></ViewButton>
            </Card.Body>
          </Card>
        )
        this.setState({runs});
      })
      .catch(error => console.log(`Error: ${error}`));
  }
  render() {
    return (
      <div>
        {this.state.runs}
        <ResultsModal></ResultsModal>
      </div>
    )
  }
}
