import styled from "styled-components";
import {Link} from 'react-scroll'

export const FooterLogo = styled.img`
    margin-top: 30px;
    margin-left: 30px;
    width: 170px;
    height: 68px;
    position: relative;
`
export const Location = styled.p`
    margin-right: 40px;
    margin-top: 35px;
    margin-left: 10px;
    color: #fff;
    font-weight: 600;
    font-size: 14px;
`

export const FooterContainer = styled.div`
    
    top: 400px;
    display: flex;
    height: 150px;
    position: relative;
    background: #000;
    align-items: center;
    justify-content: center;

`

export const FooterContent = styled.div`
    position: relative;
    width: 150px;
`





export const FtNavMenu = styled.div`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;

`

export const FtNavItem = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
`

export const FtNavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    cursor: pointer;
    position: relative;

    &:hover{
        border-bottom: 3px solid #0d7b40;
`

export const FtSocial = styled.div`
        position: relative;
`

export const FtSocialP = styled.p`

        font-size: 20px;
        color: #fff;
`

export const CopyRight = styled.p`
        color: #fff;
        margin-right: 30px;
        display: none;
`

export const SocialMedia = styled.img`
        margin-top: 10px;
        margin-left: 10px;
        width:6%;
        height: 6%;
`