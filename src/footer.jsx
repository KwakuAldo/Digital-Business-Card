import React from 'react';
import TwitterLogo from '../public/Twitter Icon.jpg'
import FBLogo from '../public/Facebook Icon.jpg'
import IGLogo from '../public/Instagram Icon.jpg'
import GithubLogo from '../public/GitHub Icon.jpg'


function Footer() {
    return (
        <footer>
            <img src={TwitterLogo} alt="" />
            <img src={FBLogo} alt="" />
            <img src={IGLogo} alt="" />
            <img src={GithubLogo} alt="" />
        </footer>
    )
}

export default Footer