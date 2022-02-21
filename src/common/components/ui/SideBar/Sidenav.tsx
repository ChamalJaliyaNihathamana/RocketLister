import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { SidenavData } from "./SidenavData";
import { ArrowLeft, ArrowRight } from "react-bootstrap-icons";

const Navbar = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  height: 3.5rem;
  background-color: transparent;
`;

const MenuIconOpen = styled(Link)`
  display: flex;
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: end;
  font-size: 0.8rem;
  text-decoration: none;

  color: #000;
  &:hover {
    color: orange;
  }
`;

const MenuIconClose = styled(Link)`
  display: flex;
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: end;
  font-size: 0.8rem;
  margin-top: 8.5rem;
  margin-right: 1rem;
  text-decoration: none;
  color: #000;
  &:hover {
    color: orange;
  }
`;

const SidenavMenu = styled.div<{ close: boolean }>`
  border-right: 0.1rem solid black;
  width: 200px;
  height: 100vh;
  background-color: #ffffff;
  position: fixed;
  top: 0;
  left: ${({ close }) => (close ? "0" : "-100%")};
  transition: 0.6s;
`;

const MenuItems = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;
  height: 3rem;
`;

const MenuItemLinks = styled(Link)`
  display: flex;
  align-items: center;
  padding: 1rem 1rem;
  font-size: 1rem;
  text-decoration: none;
  color: black;
  &:hover {
    color: orange;
  }
`;

const Sidenav: React.FunctionComponent = () => {
  const [close, setClose] = useState(false);
  const showSidenav = () => setClose(!close);
  return (
    <>
      <Navbar>
        <MenuIconOpen to="#" onClick={showSidenav}>
          <ArrowRight />
          Show
        </MenuIconOpen>
      </Navbar>

      <SidenavMenu close={close}>
        <MenuIconClose to="#" onClick={showSidenav}>
          <ArrowLeft />
          Hide
        </MenuIconClose>

        {SidenavData.map((item, index) => {
          return (
            <MenuItems key={index}>
              <MenuItemLinks to={item.path} className="active">
                {item.icon}
                <span style={{ marginLeft: "16px" }}>{item.title}</span>
              </MenuItemLinks>
            </MenuItems>
          );
        })}
      </SidenavMenu>
    </>
  );
};

export default Sidenav;
