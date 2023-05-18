import React from 'react';
import {PassPercentage} from "./PassPercentage.js";
import {TrendsChart} from "./TrendsChart.js";
import {TestProgress} from "./ProgressBar.js";
import {Card, Col, Row} from "react-bootstrap";
import {useCollapse} from 'react-collapsed';
import {ListGroup} from 'react-bootstrap';
import '../../../styles/Dashboard.css';


export function InfoCards() {
  return (
    <>
      <Row sm='2'>
        <PercentageTextInfo> </PercentageTextInfo>
        <PercentageChartInfo></PercentageChartInfo>
        <TrendChartInfo></TrendChartInfo>
      </Row>
      <Row sm='1'>
        <EnvironmentInfo />
      </Row>
    </>
  )
}

function PercentageTextInfo() {
  return (
    <Col className="pass-fail-card">
      <Card className="pass-fail-results">
        <Card.Body className="widget-card-body">
          <Card.Title className="widget-card-title">
            Total Pass %
          </Card.Title>
          <Card.Text as="div">

            <div>
              <div className="widget-card-body">
                <div className="num-text">10</div>
                <div className="tc-text">Test Cases</div>
              </div>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  )
}

function PercentageChartInfo() {
  return (
    <Col className="pass-percentage-chart">
      <PassPercentage className="percentage"></PassPercentage>
    </Col>
  )
}

function TrendChartInfo() {
  return (
    <Col className="trends-chart">
      <Card className="trends">
        <Card.Body className="trend-card-body">
          <TrendsChart></TrendsChart>
        </Card.Body>
      </Card>
    </Col>
  )
}

function EnvironmentInfo() {
  return (
    <>
      <Col className="env">
          <Card className="env-info">
            <Card.Body className="env-card-body">
              <Card.Title className="env-card-title">
                Environment
              </Card.Title>
              <hr />
              <Card.Text as="div" className="env-card-text">

                  <div className="env-card-body">
                    <EnvironmentDetails testName="sign_in_tests" date="05/01/2023 09:58" env="Staging" browser="Chrome" os="Mac" pass={85} fail={15}></EnvironmentDetails>
                    <EnvironmentDetails testName="sign_in_tests" date="05/01/2023 10:50" env="dev" browser="Chrome" os="Mac" pass={100} fail={0}></EnvironmentDetails>
                    <EnvironmentDetails testName="shopping_cart_tests" date="05/02/2023 11:30" env="Prod" browser="Firefox" os="Linux - Centos7" pass={0} fail={100}></EnvironmentDetails>
                    <EnvironmentDetails testName="new_user_tests" date="05/03/2023 12:41" env="Staging" browser="Chrome" os="Windows" pass={90} fail={10}></EnvironmentDetails>
                    <EnvironmentDetails testName="shopping_cart_tests" date="05/04/2023 13:23" env="dev" browser="Chrome" os="Linux - RHEL" pass={50} fail={50}></EnvironmentDetails>
                  </div>

              </Card.Text>
            </Card.Body>
          </Card>
      </Col>
    </>
  )
}

function EnvironmentDetails(props) {
  return (
    <Collapsible title={ CollapsibleTitle(props) }
                 content={ CollapsibleContent(props) } />
  )
}

function CollapsibleTitle(props) {
  return (
    <Row sm='2' className="env-rows">
      <Col className="suite-name">
        {props.testName}
      </Col>
      <Col className="suite-progress">
        <TestProgress pass={props.pass} fail={props.fail} />
      </Col>
    </Row>
  )
}

function CollapsibleContent(props) {
  return (
    <ListGroup className="env-list" variant="flush">
      <ListGroup.Item>Date Run: {props.date}</ListGroup.Item>
      <ListGroup.Item>Env: {props.env}</ListGroup.Item>
      <ListGroup.Item>Browser: {props.browser}</ListGroup.Item>
      <ListGroup.Item>OS: {props.os}</ListGroup.Item>
    </ListGroup>
  )
}
function Collapsible(props) {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  const headerName = "header " + {...getToggleProps()};
  return (
    <div className="collapsible">
      <div className={headerName}>
        {isExpanded ? props.title : props.title}
      </div>
      <div {...getCollapseProps()}>
        <div className="content">
          {props.content}
        </div>
      </div>
    </div>
  );
}
