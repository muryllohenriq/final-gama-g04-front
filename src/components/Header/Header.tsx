import { FaChevronLeft } from 'react-icons/fa'
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Header.style.css';

type HeaderProps = {
    hasGoBack?: boolean;
}

function Header(props: HeaderProps) {
    return (
        <Navbar className="navbar" >
            {props.hasGoBack && (
            <Link className='btn-go-back' to="/"><FaChevronLeft color="white"/></Link>
            )}
            <div className={`box-logo ${props.hasGoBack? 'logo-margin-right': ""}`}>
                <div className='logo' style={{ height: "47.25px", width: "96px", backgroundColor: "#F9F9F9" }}></div>
            </div>
        </Navbar>
    )
}

export default Header;