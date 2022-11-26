import styled from "styled-components";
import Card from 'react-bootstrap/Card';

export const ContainerKitchen = styled(Card)`
    width: 304px;
    height: 391px;
    box-shadow: 2px 2px 15px rgba(29, 28, 28, 0.07);
    border-radius: 16px;
`;

export const OrderedsCard = styled.div`
    border-top: 2px solid #676767;
    border-bottom: 2px solid #676767;
`

export const Ordered = styled.div`
.ul li{
    margin-left: 10px
}
`

export const ButtonClose = styled.button`
    color: white;
    background-color: #A14C47;
    border: none;
    border-radius: 8px;
    width: 280px;
    height: 46px;
`;