import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div className='poo'>
                <h1>Welcome to Our Retail Shop</h1>
                <p>This is where you can find our products</p>
            </div>

            <nav>
                <Link to="/">LOGIN</Link>
                <Link to="/home">HOME</Link>
                <Link to="/product">PRODUCT</Link>
                <Link to="/About">ABOUT US</Link>
            </nav>

            <section>
                <div className="welcome-message">
                    <h3>
                        <i>Welcome to our retail shop, your premier destination for all your home appliance needs. 
                        Step into our digital showroom and discover a world where innovation meets convenience, 
                        and quality reigns supreme. From state-of-the-art kitchen appliances to cutting-edge electronics,
                        we offer a curated selection that enhances every aspect of your home life. Whether you're outfitting your 
                        kitchen with the latest gadgets or upgrading your entertainment system, our diverse range ensures there's 
                        something to suit every household. Experience unparalleled performance, reliability, and style with our 
                        top-of-the-line products, backed by our commitment to exceptional customer service. Join us in redefining
                        the modern home with our products, where every appliance purchase brings you one 
                        step closer to a smarter, more efficient lifestyle.</i>
                    </h3>
                </div>
                <div className="image-container">
                    <img src="appliances1.jpg" alt="Appliance 1" />
                    <img src="appliance1.jpg" alt="Appliance 2" />
                    <img src="app3.jpg" alt="Appliance 3" />
                </div>
            </section>

            <footer>
                <p>&copy; 2024 Retail Shop. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Home;
