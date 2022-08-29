import React, {useState} from 'react'
import { SolContainer, SolH1, SolH2, SolH3, SolCards, SolCard, SolP, SolContent, AnimatedImg, SolButton, Colorgreen } from './SolElements'
import {Button} from '../ButtonElements'


const SolSection = () => {
    const [hover, setHover] = useState(false)
    
    const onHover = () => {
        setHover(!hover)
    }
  return (
    <SolContainer>
        <SolContent>
            <AnimatedImg />
        <SolH1>Conheça nossas soluções</SolH1>
        <SolH2>Há 4 anos Levando a <Colorgreen>Transformação Digital</Colorgreen> para o Mercado Financeiro</SolH2>
        </SolContent>
        <SolCards>
            <SolCard>
                <SolH3>Outsourcing e Hunting</SolH3>
            <SolP>Com altos índices de assertividade nas contratações, selecionamos, recrutamos e desenvolvemos profissionais com o maior fit profissional e cultural com nossos clientes.</SolP>
            </SolCard>
            <SolCard>
                <SolH3>Projetos</SolH3>
            <SolP>Somos líderes no desenvolvimento de tecnologia para o setor financeiro. Através de engenharia de software e nossa expertise, trazemos escalabilidade ágil para projetos de desenvolvimento, promovendo mudanças inovadoras.</SolP>
            </SolCard>
            <SolCard>
                <SolH3>Inteligência artificial para o mercado financeiro</SolH3>
            <SolP>Retail Liquid Provider (RLP) com aplicações de I.A., Machine Learning e Sistemas de envio de ordens em baixa latência.</SolP>
            </SolCard>
        </SolCards>
        <SolButton>
        <Button to="trabalhe-conosco" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">Saiba mais sobre as nossas soluções</Button>
        </SolButton>
    </SolContainer>
    )
}

export default SolSection