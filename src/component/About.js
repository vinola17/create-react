import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';

const About = () => {
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
                <Link to="#experience">ABOUT US</Link>
            </nav>
            <div class="row">
<div class="image-wrapper">
<img src="homeapp.jpg" />
</div>
<div class="content-wrapper">
<div class="content">
<span class="textWrapper">
<span>Here we are to tell ABOUT US!</span>
</span>
<h2>bleh</h2>
<p>Welcome to Our Retail Store, where we blend quality, value, and exceptional customer service to create an unparalleled shopping experience.
 , our store has grown from a small local shop into a beloved retail destination, 
 offering a wide variety of products ranging from the latest fashion trends and timeless home decor to cutting-edge electronics and everyday essentials.
 Our mission is to provide our customers with a diverse selection of high-quality items at competitive prices, all while maintaining a warm and inviting atmosphere. 
 We believe in fostering a sense of community and are committed to exceeding your expectations with every visit. 
 Thank you for choosing Our Retail Store – where your satisfaction is our top priority.</p>
</div>
</div>
</div>
            </div>
    );
}

export default About;