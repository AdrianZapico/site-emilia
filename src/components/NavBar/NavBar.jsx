import { LiStyled, Menu, CloseSidebar, NavLinks } from "./style"
import { Link } from "react-router-dom"
import { FaBars, FaTimes } from 'react-icons/fa'
import { useState } from "react"

const Navbar = () => {

    const [sidebar, setSidebar] = useState(false)
    const showSiderbar = () => setSidebar(!sidebar)

    return (
        <>
            <Menu>
                <FaBars onClick={showSiderbar} />
            </Menu>
            <NavLinks sidebar={sidebar}>
                <CloseSidebar onClick={showSiderbar}><FaTimes /></CloseSidebar>

                <Link to="/">
                    <LiStyled onClick={showSiderbar}> Home </LiStyled>
                </Link>
                <Link to="chat">
                    <LiStyled onClick={showSiderbar}> Localização </LiStyled>
                </Link>
                <Link to="contact">
                    <LiStyled onClick={showSiderbar}> Contato </LiStyled>
                </Link>
            </NavLinks>

        </>
    )
}

export default Navbar