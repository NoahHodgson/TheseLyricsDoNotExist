import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar expand="lg" variant="dark" style={{ backgroundColor: "#ffff65", width: 'auto' }}>
        <Container>
            <Navbar.Brand>
              <img
                alt=""
                src="/assets/title.png"
                width="100%"
                height="100%"
                className="d-inline-block align-top"
              />{' '}
            </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default App;
