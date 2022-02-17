import React from 'react';
import logo from '../assets/logoalextran.png'
const Nav = () => {
    return (
        <nav>
        <img src={logo}/>
            <ul className='nav__links'>
                <li className='nav__links--a'>
                    About me
                </li>
                <li className='nav__links--a'>
                    Portfolio
                </li>
                <li className='nav__links--a'>
                    Languages and skills
                </li>
                <li className='nav__links--a'>
                    Contact Me
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
