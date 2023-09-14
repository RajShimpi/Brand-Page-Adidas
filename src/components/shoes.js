import React from 'react';
import '../styles/jersey.css'


export default function Shoes() {
    return (
        <div className="container">
        <main className="hero">
            <div className="hreocontent">
                <h1>Sports Shoes for Men</h1>
                <br />
                <p>HOW SHOULD RUNNING SHOES FIT ? For Men's</p>
                <p>STEP AEROBICS KEEP MOVING</p>
                <br />
                <div className="herobtn">
                    <button>Shop Now</button>
                    <button className="secbtn">Category</button>
                </div><br />
                <div className="shopping">
                    <p>Also Available on</p>
                    <br />
                    <div className="brandicon">
                        <img src="/img/amazon.png" alt="amazon-logo" />
                        <img src="/img/flipkart.png" alt="flipkart-logo" />
                    </div>
                    </div>
                </div>
                <div className="heroimg">
                    <img src="/img/shoes.png" alt="Indian Jersey" />
            </div>
        </main>
        </div>
    )
}
