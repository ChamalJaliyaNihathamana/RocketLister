import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import * as FaIcons from 'react-icons/fa'

import { SidenavData } from './SidenavData'

const Navbar = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  height: 3.5rem;
  background-color: transparent;
`

const MenuIconOpen = styled(Link)`
  display: flex;
  justify-content: start;
  font-size: 1rem;
  margin-left: 2rem;
  color: #000;
  &:hover {
    color: orange;
  }
`

const MenuIconClose = styled(Link)`
  display: flex;
  justify-content: end;
  font-size: 1rem;
  margin-top: 5rem;
  margin-right: 1rem;
  color: #000;
  &:hover {
    color: orange;
  }
`

const SidenavMenu = styled.div<{ close: boolean }>`
  border-right: 0.1rem solid black;
  width: 250px;
  height: 100vh;
  background-color: #ffffff;
  position: fixed;
  top: 0;
  left: ${({ close }) => (close ? '0' : '-100%')};
  transition: 0.6s;
`

const MenuItems = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;
  height: 90px;
  padding: 1rem 0 1.25rem;
`

const MenuItemLinks = styled(Link)`
  display: flex;
  align-items: center;
  padding: 2rem 2rem;
  font-size: 20px;
  text-decoration: none;
  color: black;
  &:hover {
    background-color: #ffffff;
    color: orange;
    width: 100%;
    height: 45px;
    text-align: center;
    border-radius: 5px;
    margin: 0 2rem;
  }
`

const Sidenav: React.FunctionComponent = () => {
  const [close, setClose] = useState(false)
  const showSidenav = () => setClose(!close)
  return (
    <>
      <Navbar>
        <MenuIconOpen to="#" onClick={showSidenav}>
          <FaIcons.FaBars />
        </MenuIconOpen>
      </Navbar>

      <SidenavMenu close={close}>
        <MenuIconClose to="#" onClick={showSidenav}>
          <FaIcons.FaTimes />
        </MenuIconClose>

        {SidenavData.map((item, index) => {
          return (
            <MenuItems key={index}>
              <MenuItemLinks to={item.path}>
                {item.icon}
                <span style={{ marginLeft: '16px' }}>{item.title}</span>
              </MenuItemLinks>
            </MenuItems>
          )
        })}
      </SidenavMenu>
    </>
  )
}

export default Sidenav
