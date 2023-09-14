import React from 'react';
import '../styles/jersey.css'


export default function Sportwaer() {
    return (
        <div className="container">
        <main className="hero">
            <div className="hreocontent">
                <h1>Men's Sports T-Shirts</h1>
                <br />
                <p>Find your perfect men's t-shirt - from colourful pastels to iconic adidas designs, you'll find what you're looking for. Featuring moisture-wicking fabrics and advanced technologies, you'll stay comfortable, even when training hard.</p>
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
                    <img src="/img/tShirt.png" alt="Indian Jersey" />
            </div>
        </main>
        </div>
    )
}