import React from "react";
import styled from "styled-components";
import NavLink from "./NavLink";

const StyledNavbar = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin: 0 1em 1em 1em;
`;

const Navigation = props => {
  return (
    <StyledNavbar>
      <NavLink to="/">{"Popular Movies"}</NavLink>
      <NavLink to="/upcoming">{"Upcoming"}</NavLink>
      <NavLink to="/favorites">{"Favorites"}</NavLink>
    </StyledNavbar>
  );
};

export default Navigation;
