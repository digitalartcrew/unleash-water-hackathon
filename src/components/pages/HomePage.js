import React from "react";
import { useState, useEffect } from "react";

export const HomePage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://data.milwaukee.gov/api/3/action/datastore_search?resource_id=30fd2770-ac66-45f9-afb0-c99b9eb6ef73&limit=5"
      );
      const json = await res.json();

      setData([...json.result.records]);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Homes in Milwaukee that needs lines replaced</h1>
      {data.map((el, ind) => (
        <div key={ind}>
          {el.City} {el["House Number Range"]} {el["Street Name"]}{" "}
          {el["Zip Code"]} {el["House Number Range Contd."]}
        </div>
      ))}
    </div>
  );
};
