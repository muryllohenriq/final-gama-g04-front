import { Link } from "react-router-dom";
import styled from "styled-components";

export const CardStyle = styled.section`
  background-color: #ededed;
  width: 320px;
  height: 124px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  font-family: "Questrial", sans-serif;
  margin-top: 4px;

  strong {
    padding-bottom: 4px;
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 150%;
    color: #000;
  }

  img {
    margin-left: 4px;
  }

  .image {
    border-radius: 12px;
    width: 116px;
    height: 116px;
  }

  .badge-div {
    padding-right: 6px;
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
    text-align: end;
    padding-right: 8px;
    margin: 0;
    padding-top: 15px;
  }
`;

export const CustomLink = styled(Link)`
  text-decoration: none;
`;
