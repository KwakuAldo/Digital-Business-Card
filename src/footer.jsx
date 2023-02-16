import React from 'react';
import TwitterLogo from '../public/Twitter Icon.jpg'
import FBLogo from '../public/Facebook Icon.jpg'
import IGLogo from '../public/Instagram Icon.jpg'
import GithubLogo from '../public/GitHub Icon.jpg'


function Footer() {
    return (
        <footer>
            <a href="#">
                <img src={TwitterLogo} alt="" />
            </a>
            <a href="#">
                <img src={FBLogo} alt="" />
            </a>
            <a href="#">
                <img src={IGLogo} alt="" />
            </a>
            <a href="#">
                <img src={GithubLogo} alt="" />
            </a>
        </footer>
    )
}

export default Footer