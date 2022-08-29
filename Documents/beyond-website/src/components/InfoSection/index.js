import React, {useState} from 'react'
import { InfoContainer, InfoBg, InfoH1, InfoP, ImgBanner, InfoContent, InfoBtnWrapper, Colorgreen } from './InfoElements'
import Image from '../../images/secondBanner.jpg'
import {Button} from '../ButtonElements'

const InfoSection = () => {
    const [hover, setHover] = useState(false)
    
    const onHover = () => {
        setHover(!hover)
    }
  return (
    <InfoContainer>
        <InfoBg>
            <ImgBanner src={Image} />
        </InfoBg>
        <InfoContent>
            <InfoH1>Beyond tech:</InfoH1>
            <InfoH1>nós <Colorgreen>valorizamos conexões</Colorgreen></InfoH1>
            <InfoP>Imagine Beyond, Go [ beyond ]</InfoP>
            <InfoBtnWrapper>
            <Button to="trabalhe-conosco" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">Junte-se a nós</Button>
            </InfoBtnWrapper>
        </InfoContent>
    </InfoContainer>
    )
}

export default InfoSection