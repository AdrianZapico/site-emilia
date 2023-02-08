import React from 'react'
import wpp from '../../assets/icones/wpp.png'
import { Button, Telefone, Email, Container } from './style'

const Contact = () => {
  return (
    <>
   
      <Container>
        <Button><a href="https://api.whatsapp.com/send?phone=5537991732200" target='_blank'>
          <img src={wpp} alt="" style={{ width: '250px' }} /></a>
        </Button>
      </Container>
      <Container>
        <Telefone>
          TELEFONE: ☎️
            <p>(37) 991732200</p>
          <p>(37) 998729550</p>
          <a style={{textDecoration:"none",color:"white"}} href="mailto:joeytafolla123@gmail.com">Me mande um E-mail📧</a>
        </Telefone>
        
      </Container>
    </>

  )
}

export default Contact
