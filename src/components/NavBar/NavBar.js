import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import './NavBar.css';
 
class NavBar extends Component {
    render() {
        return (
            <header>
                <div class="wraper">
                    <div class="logo">
                        <a href="/"><img src="https://d1i986aobszzxa.cloudfront.net/images/logo.jpg" width="336" height="74" alt="Wiseradvisor - Find Local Financial Advisor" /></a>
                    </div>
                    <nav class="menu_box">
                        <label for="show-menu" class="show-menu">Menu</label>
                        
                        <ul id="menu">
                            <li><a href="/about_us.asp">About Us</a></li>
                            <li><a href="/financial-advisors.asp">Financial Advisors Directory</a></li>     
                            <li><a href="/article/">Resources</a></li>  
                            <li><a href="/advisor_signup.asp" rel="nofollow">Advertise</a></li>             
                            <li><a href="https://www.wiseradvisor.com/portfolio/index.jsp?&amp;bd=20024016&amp;src=20024016&amp;ss=y" rel="nofollow">Login</a></li>
                            <li><a href="/contact_us.asp">Contact Us</a></li>
                        </ul>
                    </nav>
                    <div class="cls"></div>
                </div>
                <div class="cls"></div>
            </header>
        );
    }
}

export default NavBar;