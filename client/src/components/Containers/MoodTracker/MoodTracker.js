import React from 'react';
import './moodTracker.css';
import Calendar from '../../Calendar';
import Nav from '../../Nav';
import Container from '../../Bootstrap/Container';
import Row from '../../Bootstrap/Row';
import Col from '../../Bootstrap/Col';
import MoodTrackerKey from '../../MoodTrackerKey';

const MoodTracker = () => (
  <div>
    <Row>
      <Col size="lg-12">
        <Nav/>
      </Col>
    </Row>
    <Container>
      <Row>
        <div>
          <Calendar />
        </div>
        <Col size="lg-1"/>
        <div>
          <MoodTrackerKey />
        </div>
      </Row>
    </Container> 
  </div>
);

export default MoodTracker;


