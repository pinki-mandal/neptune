import React from "react";
import "./Footer.css";

const Footer = () => {

    return (
        <footer className="footer-container flex-row justify-around">
            <div>
                <h5>
                    ABOUT
                </h5>
                <ul>
                    <li><small>About Us</small></li>
                    <li><small>Neptune Stories</small></li>
                    <li><small>Careers</small></li>
                    <li><small>Information</small></li>
                </ul>
            </div>
            <div>
                <h5>
                    HELP
                </h5>
                <ul>
                    <li><small>Payments</small></li>
                    <li><small>Shipping</small></li>
                    <li><small>Cancellation & Return</small></li>
                    <li><small>Report</small></li>
                </ul>
            </div>
            <div>
                <h5>
                    CONTACT US:
                </h5>
                <ul>
                    <li><small><a href="https://www.linkedin.com/feed/" target="_blank">LinkedIn</a></small></li>
                    <li><small><a href="https://github.com/manojkumar8400" target="_blank">GitHub</a></small></li>
                    <li><small><a href="https://twitter.com/home" target="_blank">Twitter</a></small></li>
                    <li><small><a href="" target="_blank">Instagram</a></small></li>
                </ul>
            </div>
            <div className="gaurantee-container">
                <img className="logo" src="https://thumbs.dreamstime.com/b/original-retro-rubber-stamp-vector-79086470.jpg" />
                <h4>
                    100% ORIGINAL
                </h4>
                <p className="txt-size">guarantee for all products <br /> at neptune.com</p>
            </div>
        </footer>
    )
}

export { Footer }