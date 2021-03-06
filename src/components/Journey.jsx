import React from 'react';

const Journey = () => {
    return (
        <section id='journey'>
        <h1 className='journey__title'>My Journey</h1>
        <div className="timeline">
  <div className="container left">
    <div className="content">
      <h2>2021 February</h2>
      <p>I started my degree learning my first language java. I learnt OOP concepts and familiarized myself with C based terminology such as loops, arrays, objects.</p>
    </div>
  </div>
  <div className="container right">
    <div className="content">
      <h2>2021 May</h2>
      <p>I Started experimenting with my own projects, creating my first ever project, which was a simple java calculator, then I moved onto other java projects such as minesweeper, GUi projects.</p>
    </div>
  </div>
  <div className="container left">
    <div className="content">
      <h2>2021 July</h2>
      <p>I Discovered frontend, and from there on out I finally realised what i wanted to do. I started simple, learning html and becoming confident with css</p>
    </div>
  </div>
  <div className="container right">
    <div className="content">
      <h2>2021 August - Present</h2>
      <p>Started my own front end projects, making websites, e-commerce store, mini games, all the while learning react and javascript. Hoping to land an internship</p>
    </div>
  </div>
</div>
</section>
    );
}

export default Journey;
