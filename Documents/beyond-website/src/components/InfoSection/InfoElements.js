import styled from "styled-components";
import {Link as LinkS} from 'react-scroll'

export const InfoContainer = styled.div`
    z-index: 1;
    position: absolute;
    top: 650px;
    width: 100%;
    height: 100%;
`

export const InfoBg = styled.div`
`

export const ImgBanner = styled.img`
    width: 100%;
    heigth: 100%;
`

export const InfoH1 = styled.h1`
color: #fff;
font-size: 40px;
text-align: right;

@media screen and (max-width: 768px) {
    margin-bottom: 20px;
    font-size: 20px;
}

@media screen and (max-width: 480px) {
    font-size: 15px;
}
`

export const InfoP = styled.p`
    margin-top: 40px;
    color: #119c52;

    @media screen and (max-width: 768px) {
        margin-top: 0px;
        font-size: 15px;

    @media screen and (max-width: 480px) {
        top: 10px;
        font-size: 15px;
    }
`

export const Colorgreen = styled.a`
    color: #01BF71;
`

export const InfoButton = styled(LinkS)`
    
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    height: 100%;
    text-transform: uppercase;
    cursor: pointer;

    &.active {
        botder-bottom: 3px solid #0d7b40;

        @media screen and (max-width: 768px) {
            margin-top: 0px;
            font-size: 15px;
    
        @media screen and (max-width: 480px) {
            margin-top: 0px;
            font-size: 15px;
        }
}

`
export const InfoContent = styled.div`
    top: 100px;
    right: 100px;
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    display: flex;
    flex-direction: column;
    text-align: end;

    @media screen and (max-width: 768px) {
        top: 20px;
        right: 20px;
    }
    
    @media screen and (max-width: 480px) {
        right: 20px;
    }
`

export const InfoBtnWrapper = styled.div`
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    align-items: end;
    @media screen and (max-width: 768px) {
        margin-top: 20px;
        right: 20px;
        font-size: 10px;
    }
    
    @media screen and (max-width: 480px) {
        margin-top: 20px;
        right: 20px;
        font-size: 10px;    }
`
