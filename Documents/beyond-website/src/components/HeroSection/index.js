import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import XPInc from '../../images/XPInc.jpg'
import BTGPactual from '../../images/BTGPactual.jpg'
import Ideal from '../../images/Ideal.jpg'
import Safra from '../../images/Safra.jpg'
import Orama from '../../images/Orama.jpg'
import Terra from '../../images/Terra.jpg'

import { HeroContainer, HeroBg, VideoBg, HeroBtnWrapper, HeroContent, HeroH1, HeroP, ArrowForward, ArrowRight, ClientH1, ClientsSection, ClientImg, Colorgreen } from './HeroElements'
import { Button } from '../ButtonElements'
const HeroSection = () => {
    const [hover, setHover] = useState(false)
    
    const onHover = () => {
        setHover(!hover)
    }

  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
            <HeroH1><Colorgreen>Liderando</Colorgreen> a revolução das fintechs por meio de <Colorgreen>talentos excepcionais</Colorgreen></HeroH1>
            <HeroP>Imagine Beyond, Go [beyond]</HeroP>
            <HeroBtnWrapper>
                <Button to="sobre-nos" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">Sobre nós {hover ? <ArrowForward /> : <ArrowRight />}</Button>
            </HeroBtnWrapper>
        </HeroContent>
        <ClientH1>Nossos Clientes</ClientH1>
        <ClientsSection>
        <marquee behavior="scroll" direction="left" scrollamount="15">
            <ClientImg src={BTGPactual} />
            <ClientImg src={XPInc} />
            <ClientImg src={Ideal} />
            <ClientImg src={Terra} />
            <ClientImg src={Safra} />
            <ClientImg src={Orama} />
        </marquee>

        </ClientsSection>
    </HeroContainer>
    )
}

export default HeroSection;