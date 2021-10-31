import React from "react"
import { Link } from "react-router-dom"
import './Footer.css'
const Footer = () =>
 <footer className="page-footer font-small blue pt-4 bg-dark text-white">
    <div className="container-fluid text-center text-md-left ">
        <div className="row">
        <div className="col-md-3 mb-md-0 mb-3 ">
                <h5 className="text-uppercase">Head Office</h5>
                <ul className="list-unstyled">
                    
                    <li><Link className="text-decoration-none" to='/home'>Dhaka</Link></li>
                    <li><Link className="text-decoration-none" to='/tours'>+8801119933</Link></li>
                    <li><Link className="text-decoration-none" to='/destination'>email: booking@tourplus.com</Link></li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled">
                    <li><Link className="text-decoration-none" to='/contact'>LogIn</Link></li>
                    <li><Link className="text-decoration-none" to='/about'>About</Link></li>
                    <li><Link className="text-decoration-none" to='/#'>Know More</Link></li>
                </ul>
            </div>


           
            <hr className="clearfix w-100 d-md-none pb-0"/>
            <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase">Footer Content</h5>
                <p>Here you can use rows and columns to organize your footer content.</p>
            </div>

            
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2020 Copyright: 
        <a href="https://tourPlus.com" className="text-decoration-none ps-2">TourPlus.com</a>
    </div>

</footer>

export default Footer