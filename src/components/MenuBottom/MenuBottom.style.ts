import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavbarBottom = styled(Navbar)`
        width: 320px; 
        height: 63px;
        background-color: #A24C47; 
        border-radius: 24px 24px 24px 24px;
        margin: 0 auto;
        margin-bottom: 16px;
        display: flex;
        justify-content: space-around;

        @media only screen and (min-width: 600px) {
          width: 70%;
        }

        @media only screen and (min-width: 1000px) {
          width: 43%;
        }
`

export const BtnBottom = styled(Link)`
  color: white;
  font-size: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    color: white;
    text-decoration: underline;
  }
`;