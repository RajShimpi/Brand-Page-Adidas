import React from 'react';
import '../styles/testjersey.css';

export default function T20() {
  return (
    <div className="container1">
      <main className="hero1">
        <div className="heroimg1">
          <img src="/img/jersey1.png" alt="Indian Jersey" />
        </div>
        <div className="herocontent1">
          <h1>Team India T-20 Jersey</h1>
          <br />
          <p>AN INSPIRING JERSEY FOR AVID CRICKET FANS MADE WITH RECYCLED MATERIALS.</p>
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

