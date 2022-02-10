import React from 'react';
import Nav from '../ui/Nav';

const Landing = () => {
    return (
        <section className='landing'>
            <Nav />
            <div className='landing__text'>
            <h3 className='landing__text--hi'>Hi Im </h3>
                <h1 className='landing__text--name'>Alex Tran</h1>
                <p className='landing__text--title'>Future Front End Developer</p>
                <p>Im aspiring to become a react developer blah blah blah more text heeheheheheh</p>
            </div>
        </section>
    );
}

export default Landing;
