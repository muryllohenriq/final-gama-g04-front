import styled from 'styled-components'

export const CardStyle = styled.section `

  background-color: #EDEDED;
  width: 320px;
  height: 124px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  font-family: 'Questrial', sans-serif;
  margin-top: 4px;



  strong {
    padding-bottom: 4px;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 150%;
  }

  img {
    margin-left: 4px;
  }

  .image {
    border-radius: 12px;
  }

  .badge-div {
    padding-top: 16px;
    padding-right: 6px;
    display: flex;
    justify-content: flex-end;
  }

  .info{
    display: flex;
    flex-direction: column;
    padding-left: 15px;
  }

  .description {
    margin: 0;
    padding-bottom: 15px;
    padding-right: 8px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 110%;
    color: #676767;
  }

  .price {
    font-weight: 400;
    font-size: 16px;
    line-height: 110%;
    color: #000000;
    text-align: end;
    padding-right: 8px;
  }

  &.details {
    background: none;
    flex-direction: column;
    .image{
      margin-left: 60px;
      width: 300px;
      height: 200px      
    } 
    width: 300px;
    height: 150px;
    border-radius: 16px;
    display: flex;
    align-items: center;   
    margin-top: 4px;
  }  
`