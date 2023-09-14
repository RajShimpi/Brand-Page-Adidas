import React from 'react';
import '../styles/testjersey.css';

export default function Bag() {
  return (
    <div className="container1">
      <main className="hero1">
        <div className="heroimg1">
          <img src="/img/bag.png" alt="Indian Jersey" />
        </div>
        <div className="herocontent1">
          <h1>Adidas Bags Bring The Style,</h1>
          <br />
          <p>Superb design and security you need from a travel partner. Whether you need a bag for the gym or for the street, you'll find it here in a range of iconic and cutting-edge designs.</p>
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

