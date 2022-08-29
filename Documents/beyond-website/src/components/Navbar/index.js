import React from 'react'
import {FaBars} from 'react-icons/fa'
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
} from './NavbarElements'

const Navbar  = ({toggle}) => {
  return (
    <>
        <Nav>
        <NavbarContainer>
            <NavLogo to='/'>[ beyond ]</NavLogo>
            <MobileIcon onClick={toggle}>
                <FaBars />
            </MobileIcon>
            <NavMenu>
                <NavItem>
                    <NavLinks to="sobre-nos">Sobre Nós</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="solucoes">Soluções</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="trabalhe-conosco">Trabalhe Conosco</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="blog">Blog</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="contato">Contato</NavLinks>
                </NavItem>
            </NavMenu>
        </NavbarContainer>
        </Nav>
    </>
    )
}

export default Navbar 