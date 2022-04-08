import React from "react";
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

const alarmDataObjects = [
  {
    alarmType: 1,
    alarmDescription: "Tank A Level High Alarm",
    recommendedActions: [
      {
        tagName: "Tank 1 Flow Control Valve Manual Command",
        command: 1,
      },
      {
        tagName: "Tank 1 Flow Control Valve Position Command",
        command: 100,
      },
      {
        tagName: "Filtered Water Effluent Valve Position Command",
        command: 0,
      },
    ],
    confidence: 0.8,
  },
  {
    alarmType: 2,
    alarmDescription: "Flowrate 1A High Alarm",
    recommendedActions: [
      {
        tagName: "Filtered Water Effluent Valve Position Command",
        command: 0,
      },
      {
        tagName: "Skim Train 2 Auto Command",
        command: 1,
      },
    ],
    confidence: 0.95,
  },
];

export const HomePage = () => {
  const [alarms, setAlarms] = useState();

  useEffect(() => {
    setAlarms(alarmDataObjects);
  }, []);

  return (
    <Container>
      <header>
        <h1>Alarm Response Validator</h1>
        <p>
          Confirm to accept the set of actions as complete and correct. Reject
          to confirm checked actions and discard unchecked items.
        </p>
      </header>
      {alarms?.map((el, ind) => (
        <Row className="alarms__row">
          <Col>
            <Card className="alarms__actions-cards">
              <Card.Body>
                <Card.Title>{el.alarmDescription}</Card.Title>
                <Card.Text>
                  {el.recommendedActions.map((el, ind) => (
                    <Form key={ind}>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      >
                        <Form.Check
                          type="checkbox"
                          label={el.tagName + " to " + el.command}
                        />
                      </Form.Group>
                    </Form>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title> Confidence Score: {el.confidence}</Card.Title>
                <Card.Link href="#">Confirm</Card.Link>
                <Card.Link href="#">Reject</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ))}
    </Container>
  );
};
