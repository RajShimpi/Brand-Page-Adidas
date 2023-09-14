import React from 'react';
import '../styles/testjersey.css';

export default function Tracksuit() {
  return (
    <div className="container1">
      <main className="hero1">
        <div className="heroimg1">
          <img src="/img/tracksuit.png" alt="Indian Jersey" />
        </div>
        <div className="herocontent1">
          <h1>Men's Sports Tracksuit</h1>
          <br />
          <p>Adidas men's tracksuits are built for active comfort and effortless style, whether you're off to a training session or just chilling out. Choose from tracksuits sporting the iconic 3-stripes and adidas trefoil, in a wide range of colours.</p>
          <br />
          <div className="herobtn1">
            <button>Shop Now</button>
            <button className="secbtn1">Category</button>
          </div>
          <br />
          <div className="shopping1">
            <p>Also Available on</p>
            <br />
            <div className="brandicon1">
              <img src="/img/amazon.png" alt="Amazon Logo" />
              <img src="/img/flipkart.png" alt="Flipkart Logo" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

