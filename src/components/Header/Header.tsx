import { FaChevronLeft } from "react-icons/fa";
import { Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import iconBuscar from "../../assets/buscar-icon.svg"
import { BtnSearch } from "./Header.style";
import "./Header.style.css";
import logo from "../../assets/logo.png"

type HeaderProps = {
  hasGoBack?: boolean;
  hasSearch?: boolean;
  hasOrdered?: boolean;
};

function Header(props: HeaderProps) {
  const navigate = useNavigate();

  return (
    <Navbar className="navbarHeader" sticky="top">
      {props.hasGoBack && (
        <Link className="btn-go-back" to="" onClick={() => navigate(-1)} >
          <FaChevronLeft color="white" />
        </Link>
      )}
      <div className={`box-logo ${props.hasGoBack ? "logo-margin-right" : ""} ${props.hasSearch ? "logo-margin-left" : ""}`}>
        <div><img src={logo} style={{width: "250px"}} alt="" /></div>
      </div>
      {props.hasSearch && (
        <BtnSearch to="/search">
          <img src={iconBuscar} alt="" style={{ height: '20px', width: '20.17px' }}/>
          <span style={{ fontSize: '12px', color: "white" }}>Buscar</span>
        </BtnSearch>
      )}
    </Navbar>
  );
}

export default Header;
