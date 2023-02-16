import React from "react";
import HeroImg from '../public/hero.jpg'
import MailEmail from '../public/Mailemail.jpg'
import LinkedIn from '../public/Icon-Font Awesome Free-Brands-L-linkedinlinkedin.jpg'

function Hero() {
    return (
        <div className="hero--section">
            <img src={HeroImg} />
            <div className="hero--profile">
                <h1>Laura Smith</h1>
                <p className="hero--title">Frontend Developer</p>
                <p className="hero--website">laurasmith.website</p>
            </div>
            <div className="hero--buttons">
                <button>
                    <img src={MailEmail} alt="" />
                    Email
                </button>
                <button id="linkedIn">
                    <img src={LinkedIn} alt="" />
                    LinkedIn
                </button>
            </div>
        </div>
    )
}

export default Hero;