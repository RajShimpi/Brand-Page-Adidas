import React from 'react';
import '../styles/jersey.css'


export default function Jersey() {
    return (
        <div className="container">
        <main className="hero">
            <div className="hreocontent">
                <h1>Team India ODI Jersey</h1>
                <br />
                <p>SHOUT YOUR SUPPORT AS THEY TAKE ON THE CRICKET WORLD</p>
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
                    <img src="/img/Odi.png" alt="Indian Jersey" />
            </div>
        </main>
        </div>
    )
}
