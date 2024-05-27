import React from 'react';
import './Product.css';
import { Link } from 'react-router-dom';


const Product = () => {
    return (
        <div>
            <header>
                <h1>Welcome to Our Retail Shop</h1>
                <p>This is where you can find our products</p>
            </header>

            <nav>
            <Link to="/">LOGIN</Link>
            <Link to="/Home">HOME</Link>
            <Link to="/Product">PRODUCT</Link>
            <Link to="/About">ABOUT US</Link>
            </nav>

            <section>
                <div>
                    <img src="airoven.jpg" alt="Air Oven" />
                    <h5><p>AIR OVEN</p></h5>
                </div>
                <div>
                    <img src="iron.jpg" alt="Iron" />
                    <h5><p>IRON</p></h5>
                </div>
                <div>
                    <img src="panset.jpg" alt="Pan Set" />
                    <h5><p>PAN SET</p></h5>
                </div>
                <div>
                    <img src="blender.jpg" alt="Blender" />
                    <h5><p>BLENDER</p></h5>
                </div>
            </section>
            <section>
                <div>
                    <img src="fridge.jpg" alt="Fridge" />
                    <h5><p>FRIDGE</p></h5>
                </div>
                <div>
                    <img src="washing.jpg" alt="Washing Machine" />
                    <h5><p>WASHING MACHINE</p></h5>
                </div>
                <div>
                    <img src="ac.jpg" alt="Air Conditioner" />
                    <h5><p>AIR CONDITIONER</p></h5>
                </div>
                <div>
                    <img src="chim.jpg" alt="Chimney" />
                    <h5><p>CHIMNEY</p></h5>
                </div>
            </section>
            <footer>
                <p>&copy; 2024 Retail Shop. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Product;
