import React, { useEffect } from 'react';
import './Style.css';

const Portfolio = () => {

    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector("header");
            if (header) {
                header.classList.toggle("sticky", window.scrollY > 0);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div>
            <header>
                <h2 className="vino">VINOLA ANGELINE</h2>
                <ul>
                    <li><a href="#">ABOUT</a></li>
                    <li><a href="#">SKILLS</a></li>
                    <li><a href="#">EDUCATION</a></li>
                    <li><a href="#">CONTACT</a></li>
                </ul>
            </header>
        </div>
       
    );
};

export default Portfolio;
