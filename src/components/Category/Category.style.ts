import styled from "styled-components";

export const CategoryHeader = styled.header`
  border-bottom: 2px solid #ededed;
  width: 90%;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 150%;
  margin-bottom: 16px;
  padding-top: 16px;

  @media only screen and (min-width: 700px){
    width: 700px;
  } 

  @media only screen and (min-width: 1200px){
    width: 1000px;
  } 
  `;

export const CategoryDiv = styled.div`
  padding-bottom: 10px;


  
  @media only screen and (min-width: 700px){
    width: 700px;
    display: flex;
    flex-wrap: wrap;
  } 

  @media only screen and (min-width: 1200px){
    width: 1000px;
    display: flex;
    flex-wrap: wrap;
  } 

  padding-top: 126px;
  margin-top: -110px;

`