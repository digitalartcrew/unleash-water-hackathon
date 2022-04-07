import React from "react";
import { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { AiTwotoneAlert } from "react-icons/ai";

const alarmDataObjects = [
  {
    id: 1,
    description: "COMMUNICATION FAILURE 1",
    startTime: new Date(),
    endTime: new Date(),
    priority: 1,
    actions: [
      {
        id: 1,
        equipmentId: 1,
        command: "clean station",
        timestamp: "some time stamp",
        userId: "id of init operator",
      },
      {
        id: 2,
        equipmentId: 2,
        command: "reset systems",
        timestamp: "some time stamp",
        userId: "id of init operator",
      },
      {
        id: 3,
        equipmentId: 3,
        command: "add chemicals",
        timestamp: "some time stamp",
        userId: "id of init operator",
      },
      {
        id: 4,
        equipmentId: 4,
        command: "replace engines",
        timestamp: "some time stamp",
        userId: "id of init operator",
      },
    ],
  },
  {
    id: 2,
    description: "COMMUNICATION FAILURE 2",
    startTime: new Date(),
    endTime: new Date(),
    priority: 1,
    actions: [
      {
        id: 1,
        equipmentId: 1,
        command: "clean station",
        timestamp: "some time stamp",
        userId: "id of init operator",
      },
      {
        id: 2,
        equipmentId: 2,
        command: "reset systems",
        timestamp: "some time stamp",
        userId: "id of init operator",
      },
      {
        id: 3,
        equipmentId: 3,
        command: "add chemicals",
        timestamp: "some time stamp",
        userId: "id of init operator",
      },
      {
        id: 4,
        equipmentId: 4,
        command: "replace engines",
        timestamp: "some time stamp",
        userId: "id of init operator",
      },
    ],
  },
  {
    id: 3,
    description: "COMMUNICATION FAILURE 3",
    startTime: new Date(),
    endTime: new Date(),
    priority: 1,
    actions: [
      {
        id: 1,
        equipmentId: 1,
        command: "clean station",
        timestamp: "some time stamp",
        userId: "id of init operator",
      },
      {
        id: 2,
        equipmentId: 2,
        command: "reset systems",
        timestamp: "some time stamp",
        userId: "id of init operator",
      },
      {
        id: 3,
        equipmentId: 3,
        command: "add chemicals",
        timestamp: "some time stamp",
        userId: "id of init operator",
      },
      {
        id: 4,
        equipmentId: 4,
        command: "replace engines",
        timestamp: "some time stamp",
        userId: "id of init operator",
      },
    ],
  },
  {
    id: 4,
    description: "COMMUNICATION FAILURE 4",
    startTime: new Date(),
    endTime: new Date(),
    priority: 1,
    actions: [
      {
        id: 1,
        equipmentId: 1,
        command: "clean station",
        timestamp: "some time stamp",
        userId: "id of init operator",
      },
      {
        id: 2,
        equipmentId: 2,
        command: "reset systems",
        timestamp: "some time stamp",
        userId: "id of init operator",
      },
      {
        id: 3,
        equipmentId: 3,
        command: "add chemicals",
        timestamp: "some time stamp",
        userId: "id of init operator",
      },
      {
        id: 4,
        equipmentId: 4,
        command: "replace engines",
        timestamp: "some time stamp",
        userId: "id of init operator",
      },
    ],
  },
  {
    id: 5,
    description: "COMMUNICATION FAILURE 5",
    startTime: new Date(),
    endTime: new Date(),
    priority: 1,
    actions: [
      {
        id: 1,
        equipmentId: 1,
        command: "clean station",
        timestamp: "some time stamp",
        userId: "id of init operator",
      },
      {
        id: 2,
        equipmentId: 2,
        command: "reset systems",
        timestamp: "some time stamp",
        userId: "id of init operator",
      },
      {
        id: 3,
        equipmentId: 3,
        command: "add chemicals",
        timestamp: "some time stamp",
        userId: "id of init operator",
      },
      {
        id: 4,
        equipmentId: 4,
        command: "replace engines",
        timestamp: "some time stamp",
        userId: "id of init operator",
      },
    ],
  },
];

export const HomePage = () => {
  const [alarms, setAlarms] = useState();

  useEffect(() => {
    setAlarms(alarmDataObjects);
  }, []);

  return (
    <div>
      <Accordion>
        {alarms?.map((el, ind) => (
          <Accordion.Item eventKey={ind} key={ind}>
            <Accordion.Header>
              <Row>
                <Col
                  className="message"
                  style={{ backgroundColor: "black", color: "red" }}
                >
                  {el.description}
                </Col>
                <Col
                  className="status"
                  style={{ backgroundColor: "blue", color: "yellow" }}
                >
                  Fault <AiTwotoneAlert style={{ color: "red" }} />
                </Col>
                <Col
                  className="date"
                  style={{ backgroundColor: "gray", color: "yellow" }}
                >
                  Ack All Alarms{" "}
                  <BsFillCheckCircleFill style={{ color: "green" }} />
                </Col>
              </Row>
            </Accordion.Header>
            <Accordion.Body>
              {el.actions.map((el, ind) => (
                <Form key={ind}>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label={el.command} />
                  </Form.Group>
                </Form>
              ))}
              <Card border="primary" style={{ width: "18rem" }}>
                <Card.Header>Model Confidence</Card.Header>
                <Card.Body>
                  <Card.Title>77%</Card.Title>
                  <Card.Text>
                    SME Input
                    <Button variant="primary" size="sm">
                      Confirm
                    </Button>{" "}
                    <Button variant="secondary" size="sm">
                      Reject
                    </Button>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};
