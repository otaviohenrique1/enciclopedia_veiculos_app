import { Link } from "react-router-dom";
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText } from "reactstrap";
import { GiBattleTank } from "react-icons/gi";
import { useState } from "react";

interface HeaderProps {
  // 
}

export function Header(props: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(isOpen => !isOpen)
  };

  return (
    <Navbar color="dark" dark expand="md" full>
      <NavbarBrand href="/" className="me-4">
        <GiBattleTank size={30} className="me-2" />
        Enciclopedia de veiculos
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse navbar isOpen={isOpen}>
        <Nav className="me-auto" navbar>
          <NavItem>
            <Link to="/" className="nav-link">Home</Link>
          </NavItem>
          <UncontrolledDropdown inNavbar nav>
            <DropdownToggle caret nav>Empresa</DropdownToggle>
            <DropdownMenu right dark>
              <DropdownItem>
                <Link to="/veiculos-cadastro" className="nav-link">Cadastro</Link>
              </DropdownItem>
              <DropdownItem>
                <Link to="/veiculos-lista" className="nav-link">Lista</Link>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        <Nav>
          <NavbarText>
            Teste
          </NavbarText>
        </Nav>
      </Collapse>
    </Navbar>
  );
}