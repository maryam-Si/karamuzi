import React from "react";
import "../header/header.styles.scss";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as Search } from "../../assets/Icon feather-search.svg";

import { Link } from "react-router-dom";
const Header = () => (
  <div className="header">
    
    <Link to="/">
      <Logo className="logo-container" />
    </Link>
    <p>دانشگاه صنعتی شیراز</p>
    <div className="options">
        
      <Link className="option" to="/">
        صفحه اصلی
      </Link>
      <Link className="option" to="/contact">
        ارتباط با ما
      </Link>
      <Search/>
    </div>
  </div>
);
export default Header;
