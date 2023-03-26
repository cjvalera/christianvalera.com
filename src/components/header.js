import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  margin: 1.5rem auto;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 800px;
  padding: 1.5rem;
`;

const HeaderTitle = styled.h3`
  margin: 0;
`;

const Navigation = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  text-align: center;
  > li {
    display: inline;
  }
`;

const StyledLink = styled(Link)`
  padding: 15px 20px;
  text-decoration: none;
  color: #50505a;
  &:hover {
    color: #d91344;
    text-decoration: none;
  }
`;

const NavLink = styled(StyledLink)`
  &:hover {
    border-bottom: 1px solid #eee;
  }
`;

export default function Header() {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <StyledLink to="/">
          <HeaderTitle>Christian Valera</HeaderTitle>
        </StyledLink>
        <Navigation>
          <li>
            <NavLink
              activeStyle={{ color: "#d91344" }}
              activeClassName="active"
              to="/"
            >
              {" "}
              Home{" "}
            </NavLink>
          </li>
          <li>
            <NavLink
              activeStyle={{ color: "#d91344" }}
              activeClassName="active"
              to="/projects"
            >
              {" "}
              Projects{" "}
            </NavLink>
          </li>
        </Navigation>
      </HeaderContainer>
    </HeaderWrapper>
  );
}
