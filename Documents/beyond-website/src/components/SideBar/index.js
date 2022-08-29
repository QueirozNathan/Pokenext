import React from 'react'
import { SideBarContainer, Icon, CloseIcon, SideBarWrapper, SideBarLink, SideBarMenu } from './SideBarElements'

const SideBar = ({isOpen, toggle}) => {
  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SideBarWrapper>
            <SideBarMenu>
                <SideBarLink to="sobre-nos" onClick={toggle}>Sobre Nós</SideBarLink>
                <SideBarLink to="solucoes" onClick={toggle}>Soluções</SideBarLink>
                <SideBarLink to="trabalhe-conosco" onClick={toggle}>Trabalhe Conosco</SideBarLink>
                <SideBarLink to="blog" onClick={toggle}>Blog</SideBarLink>
                <SideBarLink to="contato" onClick={toggle}>Contato</SideBarLink>
            </SideBarMenu>
        </SideBarWrapper>
    </SideBarContainer>
  )
}

export default SideBar