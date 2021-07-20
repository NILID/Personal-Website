import { withWidth } from "@material-ui/core";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 10vh;
  border: 1px solid black;
`;
export const MainContainer = styled.div`
  display: flex;
  width: 100%;
  border: 1px dotted pink;
`;

export const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
export const Logo = styled.div``;

export const NavLink = styled.ul`
  display: inline-flex;
  list-style-type: none;
  border: 1px dotted blue;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    border-top: 1px solid #fff;
    width: 100%;
  }
`;

export const NavFlags = styled.div`
  @media (max-width: 768px) {
    img {
      display: none;
    }
  }
`;

export const NavIcon = styled.div``;
