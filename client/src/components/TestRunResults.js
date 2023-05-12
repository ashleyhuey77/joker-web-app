import React, {Component} from 'react';
import axios from '../axios.js';
import {Card, Row, Col} from 'react-bootstrap';
import '../App.css';
import {TestRunModal} from './TestRunModal.js';

export default class TestRunResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      RunResults: []
    };
  }

  getTestRunStatus(testRun) {
    if(testRun.includes('FAIL')) {
      return this.RunResults = 'fail';
    } else {
      return this.RunResults = 'pass';
    }
  }

  columnsPerRow = 4;

  componentDidMount(){
    this.getAllTestRuns();
  }
  getAllTestRuns = () => {
    axios.get(`test/runs`, {})
      .then((response) => {
        const allRuns = response.data;
        console.log(allRuns);
        const runs = allRuns.map(u =>
          <>
            <Col key='{runs.id}'>
              <Card className={`custom ${this.getTestRunStatus(u.status)}`}>
                <Card.Body>
                    <Card.Title className="card-title">
                      {u.name}
                    </Card.Title>
                    <Card.Text as="div">
                      <div>
                        <div className="panel-body">
                          <div>Browser: {u.browser}</div>
                          <div>Environment: {u.env}</div>
                          <div>OS: MAC</div>
                        </div>
                      </div>
                    </Card.Text>
                  <TestRunModal data={u} test_reports={u.test_reports} >
                  </TestRunModal>
                </Card.Body>
              </Card>
            </Col>
          </>
        )
        this.setState({runs});
      })
      .catch(error => console.log(`Error: ${error}`));
  }
  render() {
    return (
      <div>
          <Row sm={this.columnsPerRow}>
            {this.state.runs}
          </Row>
      </div>
    )
  }
}
