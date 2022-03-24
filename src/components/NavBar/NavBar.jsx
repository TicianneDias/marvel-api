import React, {useState} from 'react'
import LOGO from './logo.png'
import {Nav, Logo, Hamburger, MenuLink, Menu} from './styles'

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
        <Nav>
            <Logo href="">
                <img src={LOGO} alt="Marvel logo em vermelho"/>
            </Logo>
            <Hamburger onClick={() => setIsOpen(!isOpen)}>
                <span/>
                <span/>
                <span/>
            </Hamburger>
            <Menu isOpen={isOpen}>
                <MenuLink href="">HOME</MenuLink>
                <MenuLink href="">CHARACTERS</MenuLink>
                <MenuLink href="">STORIES</MenuLink>
                <MenuLink href="">COMIC BOOKS</MenuLink>
            </Menu>
        </Nav>
  )
}

export default NavBar