import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <Container className="App">
      <Nav>
        <Nav.Item>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/history">History</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/dashboard">Dashboard</Nav.Link>
        </Nav.Item>
      </Nav>
      <div className="content">
        <Outlet />
      </div>
    </Container>

    // 	<Navbar>
    // <Container>
    // 	<Navbar.Brand href="/">
    // 		Media Matrix | NFT Library
    // 	</Navbar.Brand>
    // 	<Navbar.Toggle />
    // 	{/* links to routes */}
    // 	<Nav.Link href="/nfts">NFTS</Nav.Link>
    // 	<Nav.Link href="/artists">Artists</Nav.Link>
    // 	<Nav.Link href="/create">Create</Nav.Link>
    // 	<Nav.Link href="https://docs.ipfs.io/install/">Install IPFS</Nav.Link>
    // 	{ currentUser
    // 		? <button onClick={signOut}>Log out</button>
    // 		: <button onClick={signIn}>Log in</button>
    // 	}
    // </Container>
    // </Navbar>
  );
}

export default App;
