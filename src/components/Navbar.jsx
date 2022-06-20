import React from "react";
import {Link} from "react-router-dom"
import styled from "styled-components";

const NavbarWrapper = styled.div`
   display : flex;
   justify-content : space-around;
   height : 60px;
   font-size : 20px;
   background-color : teal;
   align-items : center;

`
const StyledLink = styled(Link)`
       color : white;
       font-size : 20px;
       text-decoration : none;
`

const Navbar = () => {
  return <NavbarWrapper>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/login">Login</StyledLink>
  </NavbarWrapper>;
};

export default Navbar;
