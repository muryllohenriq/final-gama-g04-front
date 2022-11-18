import styled from "styled-components";

export const TotalDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: auto;
  background: #DCDCDC;
  border-radius: 8px;
  padding-right: 8px;

  *{
    margin: 0;
  }

  .total {
    font-weight: 500;
    font-size: 12px;
    line-height: 150%;
    color: #676767;
  }

  .price {
    font-weight: 600;
    font-size: 16px;
    line-height: 150%;
    color: #676767;
  }

  .total-price{
    padding: 15px;
    font-family: 'Quicksand';
    padding: 10px 0px 11px 24px;
  }

  .text {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #676767;
    border-radius: 8px;
    padding: 10px 16px;
    width: 150px;
    height: 48px;
  }

  .button {
    font-weight: 300;
    font-size: 14px;
    line-height: 100%;
    text-align: center;
    color: #F9F9F9;
  }
`