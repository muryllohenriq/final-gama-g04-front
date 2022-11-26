import { Link } from "react-router-dom";
import styled from "styled-components";

export const CardStyle = styled.section`
  background-color: #FFFFFF;
  box-shadow:2px 2px 15px rgba(29, 28, 28, 0.07);
  width: 320px;
  height: 124px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  margin-top: 4px;

  strong {
    margin-bottom: 8px;
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 90%;
    color: #000;
    height: 29px;
    width: 98%;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  img {
    margin-left: 4px;
  }

  .image {
    border-radius: 12px;
    width: 112px;
    height: 112px;
  }

  .badge-div {
    padding-right: 6px;
    padding-top: 2px;
    display: flex;
    justify-content: flex-end;
    height: 24px;
  }

  .info {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-left: 15px;
  }

  .description {
    margin: 0;
    padding-right: 8px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 110%;
    color: #676767;
    max-width: 170px;
    max-height: 30px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .price {
    font-weight: 400;
    font-size: 16px;
    line-height: 110%;
    color: #000000;
    text-align: start;
    padding-right: 8px;
    margin: 0;
  }

  .price-div {
    display: flex;
    justify-content: space-between;
    height: 20px;
    margin-top: 10px;
  }
`;

export const CustomLink = styled(Link)`
  text-decoration: none;
`;
