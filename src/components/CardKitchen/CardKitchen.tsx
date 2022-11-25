import { ButtonClose, Ordered, OrderedsCard } from "./CardKitchen.style";
import { ContainerKitchen } from "./CardKitchen.style";
import React, { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import { FaChevronDown } from "react-icons/fa";

export function CardKitchen() {
    const [open, setOpen] = useState(false);

    return (
        <>
                <ContainerKitchen>
                    <ContainerKitchen.Body style={{ display: "flex", flexDirection: "column"}}>
                        <ContainerKitchen.Title>Mesa X</ContainerKitchen.Title>
                        <ContainerKitchen.Subtitle style={{margin: "0px 0px 10px"}}>
                            00 min
                        </ContainerKitchen.Subtitle>
                        <OrderedsCard>
                            <Ordered>
                                <div style={{ display: "flex", marginTop: "15px" }}>
                                    <div style={{ width: "24px", height: "24px", background: "rgba(161, 76, 71, 0.5)",
                                    borderRadius: "8px"}}><span style={{ fontWeight: "500", paddingLeft: "9px" }}>1</span></div>
                                    <span>Item</span>
                                </div>
                                <ul style={{ padding:"0px 0px 0px 50px" }}> 
                                    <li>Detalhe</li>
                                    <li>Detalhe</li>
                                </ul>
                            </Ordered>
                            <Ordered>
                                <div style={{ display: "flex"}}>
                                    <div style={{ width: "24px", height: "24px", background: "rgba(161, 76, 71, 0.5)",
                                    borderRadius: "8px"}}> 
                                    <span style={{ fontWeight: "500", paddingLeft: "9px"}}>1</span></div>
                                    <span>Item</span>
                                </div>
                                <ul style={{ padding:"0px 0px 0px 50px" }}>
                                    <li>Detalhe</li>
                                    <li>Detalhe</li>
                                </ul>
                            </Ordered>
                            <Ordered>
                                <div style={{ display: "flex" }}>
                                    <div style={{ width: "24px", height: "24px", background: "rgba(161, 76, 71, 0.5)",
                                    borderRadius: "8px"}}><span style={{ fontWeight: "500", paddingLeft: "9px" }}>1</span></div>
                                    <span>Item</span>
                                </div>
                                <ul style={{ padding:"0px 0px 0px 50px" }}>
                                    <li>Detalhe</li>
                                    <li>Detalhe</li>
                                </ul>
                            </Ordered>
                        </OrderedsCard>
                        <span>Aberto</span>
                        <FaChevronDown style={{ margin: "0 auto" }} onClick={() => setOpen(!open)} />
                        <Collapse in={open}>
                            <ButtonClose>Finalizar</ButtonClose>
                        </Collapse>
                    </ContainerKitchen.Body>
                </ContainerKitchen>
        </>
    )
}