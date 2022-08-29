import React from 'react'
import { FooterContainer, FooterContent, FooterLogo, Location, FtNavMenu, FtNavItem, FtNavLink, FtSocial, FtSocialP, CopyRight, SocialMedia } from './FooterElements'
import Logo from '../../images/BeyondLogo.png'
import Instagram from '../../images/instaicon.png'
import LinkedIn from '../../images/LinkedInicon.png'
import Facebook from '../../images/fbicon.png'

const FooterSection = () => {
  return (
    <FooterContainer>
            <FooterLogo src={Logo} />
            <Location>Rua Viradouro, 42 - Itaim Bibi, São Paulo - SP</Location>
            <FtNavMenu>
                <FtNavItem>
                    <FooterContent>
                        <FtNavLink>Sobre Nós</FtNavLink>
                    </FooterContent>
                    <FooterContent>
                        <FtNavLink>Soluções</FtNavLink>
                    </FooterContent>
                    <FooterContent>
                        <FtNavLink>Vagas</FtNavLink>
                    </FooterContent>
                    <FooterContent>
                        <FtNavLink>Blog</FtNavLink>
                    </FooterContent>
                    <FooterContent>
                        <FtNavLink>Contato</FtNavLink>
                    </FooterContent>
                </FtNavItem>
                <FtSocial>
                    <FtSocialP>Redes Sociais</FtSocialP>
                    <SocialMedia src={Facebook} />
                    <SocialMedia src={LinkedIn} />
                    <SocialMedia src={Instagram} />
                </FtSocial>
                <CopyRight>Todos os direitos reservados</CopyRight>

            </FtNavMenu>

    </FooterContainer>
  )
}

export default FooterSection