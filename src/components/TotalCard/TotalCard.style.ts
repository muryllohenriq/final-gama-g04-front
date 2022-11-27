import styled from "styled-components";

export const TotalDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 340px;
  height: auto;
  background: #EDEDED;
  border-radius: 8px;
  padding-right: 8px;
  padding: 5px;

  @media only screen and (min-width: 720px) {
    width: 600px;
  }

  @media only screen and (min-width: 840px) {
    width: 750px;
  }

  &.details {
    margin-left: 25px;
  }

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
    padding: 10px 0px 11px 24px;

    &.details {
      padding: 0px;
    }
  }

  .textbutton {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #A14C47;
    border-radius: 8px;
    padding: 10px 30px;
    max-width: 190px;
    height: 48px;

    &.details {
      max-width: 212px;
      display: flex;
      justify-content: space-between;
      padding: 20px;
    }
  }


  .button{
    font-weight: 300;
    font-size: 14px;
    line-height: 100%;
    text-align: center;
    color: #F9F9F9;

    &.details {
      text-align: start;
    }
  }

  .price-add {
    color: #ffffff;
  }

`

export const CounterStyle = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  background-color: #DCDCDC;
  width: 80px;
  border-radius: 8px;
  height: 30px;
  margin: -10px 5px 20px 0;



p {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 110%;
  color: #000000;
  margin: 0;
}

&.details{
  width: 100px;
  height: 48px;
  background-color: #DCDCDC;
  margin: 0 0 0 5px;
}
`