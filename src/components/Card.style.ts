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
    padding-bottom: 8px;
    padding-top: 20px;
  }

  .image {
    margin-left: 4px;
  }

  .card-header {
    display: flex;
    justify-content: space-between;
  }

  .badge-div {
    padding-top: 12px;
    padding-right: 8px;
  }

  .info{
    display: flex;
    flex-direction: column;
    padding-left: 15px;
  }

  .description {
    margin: 0;
    padding-bottom: 16px;
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
  }
`