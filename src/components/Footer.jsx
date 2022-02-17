import React from 'react';

const Footer = (props) => {
    return (
        <footer>
            <p>Designed And Created By Alex Tran</p>

            <img src={props.logo}>

            </img>
            <ul>
                <li > 
                    LinkedIn
                </li>
                <li> 
                     Github
                </li>
                <li>
                    Contact
                </li>
            </ul>
        </footer>
    );
}

export default Footer;
