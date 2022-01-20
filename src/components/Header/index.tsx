import { Link } from "react-router-dom";
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem } from "reactstrap";

interface HeaderProps {
  // 
}

export function Header(props: HeaderProps) {
  return (
    <Navbar
      color="dark"
      dark
      expand="md"
      full
    >
      <NavbarBrand href="/">Enciclopedia de veiculos</NavbarBrand>
      <NavbarToggler onClick={function noRefCheck() { }} />
      <Collapse navbar>
        <Nav
          className="me-auto"
          navbar
        >
          <NavItem>
            <Link to="/" className="nav-link">Home</Link>
          </NavItem>
          <NavItem>
            <Link to="/veiculos-cadastro" className="nav-link">Cadastro</Link>
          </NavItem>
          <NavItem>
            <Link to="/veiculos-lista" className="nav-link">Lista</Link>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}