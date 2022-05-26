import { Container, Navbar } from "react-bootstrap";
import Title from "./assets/title.png"

export function TitleBar(){
    return (
    <Navbar expand="lg" variant="dark" style={{ backgroundColor: "#ffff65", width: 'auto' }}>
        <Container>
          <Navbar.Brand>
            <img src={Title} alt="These Lyrics Do Not Exist" width={'65%'} height={'65%'} />{' '}
          </Navbar.Brand>
        </Container>
      </Navbar>)
}