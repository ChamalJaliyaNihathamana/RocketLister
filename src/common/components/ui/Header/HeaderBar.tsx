import React from "react";
import { Navbar, Image, ButtonGroup, Nav } from "react-bootstrap";
import CustomButton from "../Button/CustomButton";
import { Link, useLocation } from "react-router-dom";

interface HeaderBarProps {
  location: any;
}

// const  usePathname = () => {
//   const location = useLocation();
//   return location.pathname;
// };

const HeaderBar: React.FunctionComponent<HeaderBarProps> = ({
  location = "",
}) => {
  return (
    <>
      {location.pathname ? (
        <Navbar sticky="top" bg="light" className="shadow">
          <Navbar.Brand as={Link} to="/">
            <Image src="https://rocketlister.com/wp-content/uploads/2021/02/Rocket-Lister-Logo-2.png" />
          </Navbar.Brand>
          <Nav className="justify-content-end">
            <ButtonGroup>
              <CustomButton variant="outline-primary" className="me-2">
                Request Inventory Pick Up
              </CustomButton>
              <CustomButton className="me-2">Place Order</CustomButton>
              <CustomButton className="logout">Logout</CustomButton>
            </ButtonGroup>
          </Nav>
        </Navbar>
      ) : null}
    </>
  );
};

export default HeaderBar;
