import React from 'react'
import { Container,Container2, Content,  DivImage, DivBox, Img, Button  } from './style'
import img1 from '../../assets/images/1.png'
import img2 from '../../assets/images/2.png'
import img3 from '../../assets/images/3.png'
import img4 from '../../assets/images/4.png'
import img5 from '../../assets/images/5.png'
import wpp from '../../assets/icones/wpp.png'


const Home = () => {
  
    

    const images = [img1,img2,img3,img4,img5]
    
    return (
  <>
    <Container2>Vendo lote 200m² no bairro vila santa cruz contato no botão abaixo.</Container2>
    <Container2><Button><a href="https://api.whatsapp.com/send?phone=5537991732200" target='_blank'>
        <img src={wpp} alt="" style={{width:'80px'}} /></a>
        </Button></Container2>

      <Container>
     
            <Content>
            
                <DivImage>
                {images.map((item,index) => (
                    
                    <DivBox key={index}>
                    <Img 
                   src={item}
                   
                    />
                    </DivBox>
                ))}
                </DivImage>
                

            </Content>
        </Container>
  
  </>
  )
}

export default Home
