import React from 'react';
import logo from '../images/Logo.svg';

const Footer = () => {
    return (
        <footer>
            <section>
                <div className='company-info'>
                    <img src={logo} alt=''/>
                    <p>We are a family owned Mediterranaran resturent, focused on traditional recipes served with a modern twist.</p>
                </div>
                <div>
                    <h3>Important Links</h3>
                    <ul>
                        <li><a href='/'>Home</a></li>
                        <li><a href='/'>About</a></li>
                        <li><a href='/'>Menu</a></li>
                        <li><a href='/'>Reservation</a></li>
                        <li><a href='/'>Order Online</a></li>
                        <li><a href='/'>Login</a></li>
                        </ul>
                </div>
                <div>
                    <h3>Contact</h3>
                    <ul>
                        <li>Address: <br/> 243 Anand Vihar, New Delhi</li>
                        <li>Phone: <br/>+919745678892</li>
                        <li>Email: <br/>littlelemon89@gmail.com</li>
                    </ul>
                </div>
                <div>
                <h3>Social Links</h3>
                <ul>
                        <li><a href='/'>Facebook</a></li>
                        <li><a href='/'>Instagram</a></li>
                        <li><a href='/'>Twitter</a></li>
                    </ul>
                </div>
            </section>
        </footer>
    );
};
export default Footer;