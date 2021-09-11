import React from "react";
import { Link } from "react-router-dom";

// Images
import logo from "../assets/img/logo.png";

const Header = () => {
    return (
        <header>
            <Link to="/">
                <img src={logo} alt="logo Pokedex" className="header-logo" />
                <h1>PokéDex</h1>
            </Link>
        </header>
    );
};

export default Header;
