import styled from "styled-components";

export const BadgeStyle = styled.div`
display: inline;
margin-left: 4px;

&.details {
  display: flex;
  align-items: center;

  padding: 4px 8px;
  width: auto;
  /* height: 28px; */
  background: #EDEDED;
  border-radius: 20px;

  & img {
    width: 20px;
    height: 20px;
    margin-right: 4px;
  }
}

`