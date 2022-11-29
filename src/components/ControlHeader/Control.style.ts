import styled from "styled-components";

export const ControlStyle = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;

  .title{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px;
    width: 50vh;

    @media only screen and (min-width: 720px) {
      width: 80vh;
    }
  }

  strong {
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 150%;
    color: #000000;
  }

  .checkout {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px;
  }

  .checkout-text {
    font-weight: 600;
    font-size: 16px;
    line-height: 150%;
    text-align: center;
    color: #000000;
    width: auto;
    padding: 0 15px;
    margin: 0;
    background: none;
    border: none;
  }

  img {
    padding: 20px 20px 20px 0;
    margin-right: 25px;
  }
`