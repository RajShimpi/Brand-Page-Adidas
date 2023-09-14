import React from 'react';
import '../styles/jersey.css'


export default function Cap() {
    return (
        <div className="container">
        <main className="hero">
            <div className="hreocontent">
                <h1>Collection Of Caps And Hats</h1>
                <br />
                <p>A practical year-round staple, stylish everyday accessory and athletic companion, the adidas collection of caps and hats is designed to add a touch of .</p>
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
                    <img src="/img/cap.png" alt="Indian Jersey" />
            </div>
        </main>
        </div>
    )
}
