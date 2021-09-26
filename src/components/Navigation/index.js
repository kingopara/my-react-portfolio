import React from "react";

function Navigation() {

    const categories = [
        {
            name: "Portfolio"
        },
        {
            name: "Resume"
        }
    ];

    function categorySelected(name) {
        console.log(`${name} clicked`)
    }

    return (
        <nav>
            <ul className="flex-row">
                <li className="mx-2">
                    <a href="#about">
                        About Me
                    </a>
                </li>
                <li>
                    <span>Contact</span>
                </li>
                {categories.map((category) => (
                    <li className="mx-1" key={category.name} >
                        <span onClick={() => categorySelected(category.name)}> {category.name} </span>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navigation;