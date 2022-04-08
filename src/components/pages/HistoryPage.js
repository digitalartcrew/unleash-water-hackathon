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
    confirmed: false,
    completedDate: "3/23/2022",
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
    confirmed: true,
    completedDate: "12/23/2021",
  },
];

export const HistoryPage = () => {
  const [alarms, setAlarms] = useState();

  useEffect(() => {
    setAlarms(alarmDataObjects);
  }, []);

  return (
    <Container>
      <header>
        <h1>Alarm Response Validator - History</h1>
        <p>Green represents actions used to resolve alarm.</p>
      </header>
      {alarms?.map((el, ind) => (
        <Row className="alarms__row">
          <Col>
            <Card className="alarms__actions-cards">
              <Card.Body>
                <Card.Title>{el.alarmDescription}</Card.Title>
                <Card.Text>
                  <ul>
                    {el.recommendedActions.map((el, ind) => (
                      <li
                        key={ind}
                        className={
                          ind % 2 === 0
                            ? "red-text list-unstyled"
                            : "green-text list-unstyled"
                        }
                      >
                        {el.tagName + " to " + el.command}
                      </li>
                    ))}
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>
                  {el.confirmed ? "Confirmed" : "Rejected"}
                </Card.Title>
                <p>{el.completedDate}</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ))}
    </Container>
  );
};
