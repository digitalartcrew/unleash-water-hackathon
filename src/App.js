import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { Nav } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
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
    <Router>
      <Switch>
        <Route path="/nfts/:nftId" component={<div>Test 1</div>} />
        <Route path="/nfts" component={<div>Test 2</div>} />
        <Route path="/artists/:artistId" component={<div>Test 3</div>} />
        <Route path="/artists/" component={<div>Test 4</div>} />
        <Route path="/create" component={<div>Test 5</div>} />
        <Route exact strict path="/" component={<div>Test 6</div>} />
      </Switch>
      <div className="App">
        <Nav
          activeKey="/home"
          onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
          <Nav.Item>
            <Nav.Link href="/home">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Lead Service Search</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Plumber Direction</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
              Lead Pipeline Awareness
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <h1>Homes in Milwaukee that needs lines replaced</h1>
        {data.map((el, ind) => (
          <div key={ind}>
            {el.City} {el["House Number Range"]} {el["Street Name"]}{" "}
            {el["Zip Code"]} {el["House Number Range Contd."]}
          </div>
        ))}
      </div>
    </Router>
  );
}

export default App;
