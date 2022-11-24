import { Container } from "react-bootstrap";
import styled from "styled-components";

export const Input = styled.input`
  width: 320px;
  height: 48px;
  background-color: #dcdcdc;
  border-radius: 12px;
  border-style: none;
  padding-left: 52px;

  ::placeholder {
    color: #262626;
    font-weight: 500;
  }
`;

export const InputContainer = styled.div`
  position: relative;
  margin: 0 auto;

  label {
    position: absolute;
    left: 14px;
    top: 10px;
  }
`;

export const ContainerSearch = styled(Container)`
  margin-top: 4px;
`;