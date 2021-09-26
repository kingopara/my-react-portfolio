import React from "react";
import Navigation from "../Navigation";

function Header() {
    return (
        <header className="flex-row">
            <a href="/">
                <h1> Praise Opara </h1>
            </a>
            <Navigation></Navigation>
        </header>
    );
}

export default Header;