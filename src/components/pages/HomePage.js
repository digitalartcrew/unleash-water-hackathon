import React from "react";
import { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const alarmDataObjects = [
  {
    id: 1,
    description: "Some description 1",
    startTime: new Date(),
    endTime: new Date(),
    priority: 1,
    actions: [
      {
        id: 1,
        equipmentId: 1,
        command: "some command",
        timestamp: "some time stamp",
        userId: "id of init operator",
      },
      {
        id: 2,
        equipmentId: 2,
        command: "some command",
        timestamp: "some time stamp",
        userId: "id of init operator",
      },
      {
        id: 3,
        equipmentId: 3,
        command: "some command",
        timestamp: "some time stamp",
        userId: "id of init operator",
      },
      {
        id: 4,
        equipmentId: 4,
        command: "some command",
        timestamp: "some time stamp",
        userId: "id of init operator",
      },
    ],
  },
  {
    id: 2,
    description: "Some description 2",
    startTime: new Date(),
    endTime: new Date(),
    priority: 1,
    actions: [
      {
        id: 1,
        equipmentId: 1,
        command: "some command",
        timestamp: "some time stamp",
        userId: "id of init operator",
      },
      {
        id: 2,
        equipmentId: 2,
        command: "some command",
        timestamp: "some time stamp",
        userId: "id of init operator",
      },
      {
        id: 3,
        equipmentId: 3,
        command: "some command",
        timestamp: "some time stamp",
        userId: "id of init operator",
      },
      {
        id: 4,
        equipmentId: 4,
        command: "some command",
        timestamp: "some time stamp",
        userId: "id of init operator",
      },
    ],
  },
  {
    id: 3,
    description: "Some description 3",
    startTime: new Date(),
    endTime: new Date(),
    priority: 1,
    actions: [
      {
        id: 1,
        equipmentId: 1,
        command: "some command",
        timestamp: "some time stamp",
        userId: "id of init operator",
      },
      {
        id: 2,
        equipmentId: 2,
        command: "some command",
        timestamp: "some time stamp",
        userId: "id of init operator",
      },
      {
        id: 3,
        equipmentId: 3,
        command: "some command",
        timestamp: "some time stamp",
        userId: "id of init operator",
      },
      {
        id: 4,
        equipmentId: 4,
        command: "some command",
        timestamp: "some time stamp",
        userId: "id of init operator",
      },
    ],
  },
  {
    id: 4,
    description: "Some description 4",
    startTime: new Date(),
    endTime: new Date(),
    priority: 1,
    actions: [
      {
        id: 1,
        equipmentId: 1,
        command: "some command",
        timestamp: "some time stamp",
        userId: "id of init operator",
      },
      {
        id: 2,
        equipmentId: 2,
        command: "some command",
        timestamp: "some time stamp",
        userId: "id of init operator",
      },
      {
        id: 3,
        equipmentId: 3,
        command: "some command",
        timestamp: "some time stamp",
        userId: "id of init operator",
      },
      {
        id: 4,
        equipmentId: 4,
        command: "some command",
        timestamp: "some time stamp",
        userId: "id of init operator",
      },
    ],
  },
  {
    id: 5,
    description: "Some description 5",
    startTime: new Date(),
    endTime: new Date(),
    priority: 1,
    actions: [
      {
        id: 1,
        equipmentId: 1,
        command: "some command",
        timestamp: "some time stamp",
        userId: "id of init operator",
      },
      {
        id: 2,
        equipmentId: 2,
        command: "some command",
        timestamp: "some time stamp",
        userId: "id of init operator",
      },
      {
        id: 3,
        equipmentId: 3,
        command: "some command",
        timestamp: "some time stamp",
        userId: "id of init operator",
      },
      {
        id: 4,
        equipmentId: 4,
        command: "some command",
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
          <Accordion.Item eventKey={ind}>
            <Accordion.Header>{el.description}</Accordion.Header>
            <Accordion.Body>
              {el.actions.map((el, ind) => (
                <div>{el.command}</div>
              ))}
              <Card border="primary" style={{ width: "18rem" }}>
                <Card.Header>Model Confidence</Card.Header>
                <Card.Body>
                  <Card.Title>77%</Card.Title>
                  <Card.Text>
                    SME Input
                    <div>
                      <Button variant="primary" size="sm">
                        Confirm
                      </Button>{" "}
                      <Button variant="secondary" size="sm">
                        Reject
                      </Button>
                    </div>
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
