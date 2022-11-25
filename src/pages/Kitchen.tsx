import { CardKitchen } from "../components/CardKitchen/CardKitchen";
import Header from "../components/Header/Header";
import { Page } from "./Kitchen.style";

export function Kitchen() {
    

    return (
        <>
            <Header hasOrdered />
            <Page>
               <CardKitchen />
               <CardKitchen />
               <CardKitchen />
               <CardKitchen />
            </Page>
        </>
    )
}