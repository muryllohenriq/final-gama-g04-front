import { Link } from "react-router-dom";

type HeaderProps = {
    hasGoBack?: boolean;
}

function Header(props: HeaderProps) {
    return (
        <nav>
            {props.hasGoBack && (
            <Link to="/">Voltar</Link>
            )}
        </nav>
    )
}

export default Header;