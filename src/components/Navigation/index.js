import React, {useState} from "react";
import NavTabs from '../NavTabs/index';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Portfolio from '../pages/Portfolio';
import Resume from '../pages/Resume';

function Navigation() {

    const [currentPage, handlePageChange] = useState('About');

    const renderPage = () => {
        switch (currentPage) {
            case 'About':
                return <About/>;
            case 'Contact':
                return <Contact/>;
            case 'Portfolio':
                return <Portfolio/>;
            case 'Resume':
                return <Resume/>;
            default: return <About/>
        }
    };

    return (
        <div>
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
            <div>
                {
                    renderPage()
                }
            </div>
        </div>
        
    )

    // const categories = [
    //     {
    //         name: "Portfolio"
    //     },
    //     {
    //         name: "Resume"
    //     }
    // ];

    // function categorySelected(name) {
    //     console.log(`${name} clicked`)
    // }

    // return (
    //     <nav>
    //         <ul className="flex-row">
    //             <li className="mx-2">
    //                 <a href="#about">
    //                     About Me
    //                 </a>
    //             </li>
    //             <li>
    //                 <span>Contact</span>
    //             </li>
    //             {categories.map((category) => (
    //                 <li className="mx-1" key={category.name} >
    //                     <span onClick={() => categorySelected(category.name)}> {category.name} </span>
    //                 </li>
    //             ))}
    //         </ul>
    //     </nav>
    // );
}

export default Navigation;