import React from "react";

const Footer = (props) => {
  return (
    <footer>
      <p>Designed And Created By Alex Tran</p>

      <img src={props.logo}></img>
      <ul>
        <a href='https://www.linkedin.com/in/alex-tran-221ba8219/'>
          <li>LinkedIn</li>
        </a>
        <a href='https://github.com/alexalextran' >
          <li>Github</li>
        </a>
      </ul>
    </footer>
  );
};

export default Footer;
