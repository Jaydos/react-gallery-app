import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => { 
    return (
        // Create Links
        <nav className= "main-nav">
            <ul>
                <Link to="/cats">Cats</Link>
                <Link to="/dogs">Dogs</Link>
                <Link to="/birds">Birds</Link>                
            </ul>

        </nav>
    )

}

export default Nav;