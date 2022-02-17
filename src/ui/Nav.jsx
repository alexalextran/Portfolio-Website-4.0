import React from 'react';

const Nav = (props) => {
    return (
        <nav>
        <img src={props.logo}/>
            <ul className='nav__links'>
                <a href='#aboutme'><li>
                    About me
                </li></a>
                <a href='#skills'><li>
                    Skills
                </li></a>
                <a href='#projects'><li>
                    Projects
                </li></a>
                <a href='#journey'> <li>
                    My Journey
                </li></a>
            </ul>
        </nav>
    );
}

export default Nav;
