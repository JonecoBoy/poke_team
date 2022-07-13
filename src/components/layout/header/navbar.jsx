import React from "react"
import {Nav,NavItem,NavLink,DropdownToggle,DropdownMenu,DropdownItem,Navbar,Collapse,UncontrolledDropdown} from "reactstrap";
import {Link} from "@reach/router";
import styled from "styled-components";
import {IoCloseCircle} from "react-icons/io5";

const NavBar =({isAuthenticated,onLogout}) =>{
    console.log(isAuthenticated);
    return(
        <Navbar
            expand="md"
        >
            <Collapse navbar>
                <Nav
                    className="me-auto"
                    navbar
                >

                    <UncontrolledDropdown
                        inNavbar
                        nav
                    >
                        <DropdownToggle
                            caret
                            nav
                        >
                            Teams
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem>
                                Create Team
                            </DropdownItem>
                            {/*<DropdownItem>*/}
                            {/*    Random Team*/}
                            {/*</DropdownItem>*/}
                            {/*<DropdownItem divider />*/}
                            {/*<DropdownItem>*/}
                            {/*    My Teams*/}
                            {/*</DropdownItem>*/}
                        </DropdownMenu>
                    </UncontrolledDropdown>

                    <NavItem>

                            {!isAuthenticated.status?
                                <NavLink>
                                < Linkk to={"login"}>Login</Linkk>
                                </NavLink>
                                :  <UncontrolledDropdown
                                    inNavbar
                                    nav
                                >
                                    <DropdownToggle
                                        caret
                                        nav
                                    >
                                        Minha Conta
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItemStyled>
                                            {isAuthenticated.response.user.email}
                                        </DropdownItemStyled>
                                        <DropdownItem divider />
                                        <Linkk to={"/admin"}>
                                        <DropdownItem>
                                            Área de Admin
                                        </DropdownItem>
                                        </Linkk>
                                        {/*<DropdownItem>*/}
                                        {/*    Random Team*/}
                                        {/*</DropdownItem>*/}
                                        <DropdownItem divider />
                                        <DropdownItem onClick={()=>{onLogout()}}>
                                            Logout
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            }

                    </NavItem>

                </Nav>
            </Collapse>
        </Navbar>
    )

}

export default NavBar

const Linkk = styled(Link)`
    text-decoration: none;
   color:black;
`
const DropdownItemStyled = styled(DropdownItem)`
    :hover{
      background-color:white;
    }
`