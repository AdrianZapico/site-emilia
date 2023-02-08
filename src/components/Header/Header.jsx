import React from 'react'
import { Container, Title, Content, ContentTitle, SubTitle } from './style'
import Navbar from '../NavBar/NavBar'
import { useState } from 'react'

const Header = () => {

    const [sidebar, setSidebar] = useState(true)

    const showSiderbar = () => setSidebar(!sidebar)

    return (
        <div>
            <Container>
                <Content>
                    <ContentTitle>
                        <Title>
                          Venda lote vila Santa Cruz 
                        </Title>
                        <SubTitle>
                          
                        </SubTitle>
                    </ContentTitle>
                    <Navbar>
                    </Navbar>
                </Content>

            </Container>
            

        </div>
    )
}

export default Header
