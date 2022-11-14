import Header from "../components/Header/Header";
import { CardDetails } from "../components/Card/Details";

function Details() {
    return (
        <>
            <Header hasGoBack/>            
            <CardDetails cardClass="details"/>
        </>
    )
}

export default Details;