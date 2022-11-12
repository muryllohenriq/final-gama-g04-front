import Header from "../components/Header/Header";
import {Card} from "../components/Card/Card"

function Details() {
    return (
        <>
            <Header hasGoBack/>
            <h1>Details</h1>
            <Card cardClass="details"/>
        </>
    )
}

export default Details;