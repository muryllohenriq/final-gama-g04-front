import Header from "../components/Header/Header";
import { MenuBottom } from "../components/MenuBottom/MenuBottom";
import { Navbar as NavbarBs } from "react-bootstrap";
import { ContainerSearch, Input, InputContainer } from "./Search.style";
import iconBuscarInput from "../assets/buscar-icon-input.svg"
import { useEffect, useState } from "react";
import { Card, CardProps } from "../components/Card/Card";
import api from "../services/api";

export function Search() {
    const [productList, setProductList] = useState<CardProps[]>([]);
    const [searchedText, setSearchedText] = useState('')

    async function getProductData() {
        const response = await api.get("products");
        setProductList(response.data);
    }

    useEffect(() => {
        getProductData();
    }, []);

    return (
        <>
            <Header hasGoBack />

            <NavbarBs
                style={{ marginTop: "63px", backgroundColor: "white", height: "80px" }}
                fixed="top">
                <InputContainer>
                    <label htmlFor="search"><img src={iconBuscarInput} alt="" style={{ height: '20px', width: '20.17px' }} /></label>
                    <Input
                        type="text"
                        id="search"
                        placeholder="Digita sua busca aqui"
                        value={searchedText}
                        onChange={(event) => setSearchedText(event.target.value)} />
                </InputContainer>
            </NavbarBs>
            <div style={{ marginTop: "112px", paddingBottom: "80px" }}>
                {productList.filter((product) => product.name.toLowerCase().includes(searchedText.toLocaleLowerCase()))
                    .map((product, index) => {
                        return (
                            <ContainerSearch className="styledCards">
                                <Card
                                    key={index}
                                    idProduct={product.idProduct}
                                    name={product.name}
                                    isGlutenFree={product.isGlutenFree}
                                    isVegan={product.isVegan}
                                    category={product.category}
                                    description={product.description}
                                    price={product.price}
                                    image={product.image}
                                />
                            </ContainerSearch>
                        );
                    })}
            </div>
            <MenuBottom />
        </>
    );
}
