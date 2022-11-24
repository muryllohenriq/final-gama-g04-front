import styled from "styled-components";

export const BadgeStyle = styled.div`
display: inline;

&.details {
  display: flex;
  padding-left: 4px ;

  & img {
    width: 20px;
    height: 20px;
    margin-right: 4px;
  }

  & div {
    display: flex;
    align-items: center;
    padding: 2px 8px;
    width: auto;
    height: 30px;
    border-radius: 20px;
    box-sizing: content-box;
    background: #EDEDED;
    border-radius: 20px;
  }
}
`