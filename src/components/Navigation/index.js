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
}

export default Navigation;