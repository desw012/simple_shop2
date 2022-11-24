import {Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

function Header() {

    const cartItems = useSelector((state) => state.cart)



    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {/*<Nav.Link as={Link} to="/categories/1">category1</Nav.Link>*/}
                        {/*<Nav.Link as={Link} to="/categories/2">category2</Nav.Link>*/}
                        {/*<Nav.Link as={Link} to="/categories/3">category3</Nav.Link>*/}

                        <Nav.Link href="/categories/1">category1</Nav.Link>
                        <Nav.Link href="/categories/2">category2</Nav.Link>
                        <Nav.Link href="/categories/3">category3</Nav.Link>
                        <Nav.Link href="/youtube">youtube palyer</Nav.Link>
                        <Nav.Link href="/cart">cardItems {cartItems.length}</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;