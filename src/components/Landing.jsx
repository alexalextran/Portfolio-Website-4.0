import React from 'react';
import Nav from '../ui/Nav';

const Landing = () => {
    return (
        <section className='landing'>
            <Nav />
            <div className='landing__text'>
            <h3>hi im </h3>
                <h1 className='landing__text--name'>Alex Tran</h1>
                <p>Future Front End Developer</p>
            </div>
        </section>
    );
}

export default Landing;
