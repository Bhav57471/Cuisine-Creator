import React from 'react';
import '../Styles/Header.css';
function Header() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                     <img src='https://www.brandbucket.com/sites/default/files/logo_uploads/552328/large_tastysite.png'></img>
                    </li>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/states'>Recipes</a></li>
                    <li><a href='/about'>About</a></li>

                </ul>
            </nav>
        </div>
    );
}

export default Header;