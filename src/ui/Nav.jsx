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
