import React from "react";
import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export const LeadPage = () => {
  const [data, setData] = useState([]);
  const [zipCode, setZipCode] = useState("");

  const fetchData = async (zipCode) => {
    const res = await fetch(
      "https://data.milwaukee.gov/api/3/action/datastore_search?resource_id=30fd2770-ac66-45f9-afb0-c99b9eb6ef73"
    );

    const json = await res.json();

    const filteredData = json.result.records.filter((record) => {
      return parseInt(record["Zip Code"]) === parseInt(zipCode);
    });

    setData([...filteredData]);
  };

  useEffect(() => {
    fetchData(zipCode);
  }, [zipCode]);

  return (
    <div>
      <Form onSubmit={fetchData}>
        <Form.Group className="mb-3" controlId="formLeadSearch">
          <Form.Label>Lead Pipe Search By Zip</Form.Label>
          <Form.Control
            type="input"
            placeholder="Enter Zip Code in Milwaukee ..."
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
          />
          <Form.Text className="text-muted">
            Homes in Milwaukee that needs lines replaced
          </Form.Text>
        </Form.Group>
      </Form>
      {data?.map((el, ind) => (
        <div key={ind}>
          {el.City} {el["House Number Range"]} {el["Street Name"]}{" "}
          {el["Zip Code"]} {el["House Number Range Contd."]}
        </div>
      ))}
    </div>
  );
};
