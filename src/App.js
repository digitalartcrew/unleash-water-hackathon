import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <Container className="App">
      <Nav>
        <Nav.Item>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
      </Nav>
      <div className="content">
        <Outlet />
      </div>
    </Container>
  );
}

export default App;
