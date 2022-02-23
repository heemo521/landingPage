import React from 'react';
import {
    Nav,
    Navbar,
    NavbarBrand,
    NavItem,
    Collapse,
    NavLink,
    NavbarToggler,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownItem,
    DropdownMenu,
    NavbarText,
} from 'reactstrap';

const Header = () => {
    return (
        <div>
            <Navbar color="dark" expand="md" dark>
                <NavbarBrand href="/">devHeemo</NavbarBrand>
                <NavbarToggler onClick={function noRefCheck() {}} />
                <Collapse navbar>
                    <Nav className="me-auto" navbar>
                        <NavItem>
                            <NavLink href="/">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/">Blog</NavLink>
                        </NavItem>
                        <UncontrolledDropdown inNavbar nav>
                            <DropdownToggle caret nav>
                                Work
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>Portfolio</DropdownItem>
                                <DropdownItem>GitHub</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>Blog</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                    <NavbarText>Welcome to my page</NavbarText>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default Header;
