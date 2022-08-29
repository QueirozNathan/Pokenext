import React from 'react'
import {NewsP, NewsContainer, Label, Colorgreen, Button} from './NewsElements'
const NewsSection = () => {

  
  return (
    <NewsContainer>
      <NewsP>Assine a <Colorgreen>newsletter</Colorgreen> e fique por dentro das novidades</NewsP>
      <Label><input className="input-field" type="text"/></Label>
      <Button>Enviar</Button>
    </NewsContainer>
    )
}

export default NewsSection