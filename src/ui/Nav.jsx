import React from 'react';

const Nav = (props) => {
    return (
        <nav>
        <img src={props.logo}/>
            <ul className='nav__links'>
                <li className='nav__links--a'>
                    About me
                </li>
                <li className='nav__links--a'>
                    Skills
                </li>
                <li className='nav__links--a'>
                    Projects
                </li>
                <li className='nav__links--a'>
                    My Journey
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
