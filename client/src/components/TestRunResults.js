import React, {Component} from 'react';
import axios from '../axios.js';
import {Card} from 'react-bootstrap';
import '../App.css';
import {TestRunModal} from "./TestRunModal.js";

export default class TestRunResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
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
          <Card className='custom' key='{runs.id}'>
            <Card.Body>
                <Card.Title className="card-title">
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
              <TestRunModal data={allRuns}>
              </TestRunModal>
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
      </div>
    )
  }
}
