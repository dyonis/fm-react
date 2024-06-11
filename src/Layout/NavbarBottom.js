import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom";

function NavbarBottom() {
    const handleSelect = (eventKey) => console.log(eventKey);

    return (
        <>
            <Navbar defaultExpanded className="bg-body-tertiary" fixed="bottom">
                <Container>
                    {/*<Nav variant="pills" defaultActiveKey="1">
                        <Nav.Item>
                            <Nav.Link eventKey="1">Active</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="2">Option 2</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="3">Disabled</Nav.Link>
                        </Nav.Item>
                    </Nav>*/}

                    <Nav variant="tabs" className="w-100 justify-content-around" defaultActiveKey="1" fill onSelect={handleSelect}>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/" eventKey="1">Home</Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link as={Link} to="/" eventKey="3">Active</Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link as={Link} to="table" eventKey="2">
                                <img
                                    src="/logo192.png"
                                    width="30"
                                    height="30"
                                    className="d-inline-block align-top"
                                    alt="React Bootstrap logo"
                                />
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link as={Link} to="about" eventKey="4">About</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="contact" eventKey="5">Contact</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default NavbarBottom;
