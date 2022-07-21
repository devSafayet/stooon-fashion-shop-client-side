import React from 'react';
import img from '../../../images/footer.png';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content">
                <div>
                    <span className="footer-title">CATEGORIES</span>
                    <a className="link link-hover">Clothing</a>
                    <a className="link link-hover">Accessories</a>
                    <a className="link link-hover">Women</a>
                    <a className="link link-hover">Men</a>
                    <a className="link link-hover">Shoes</a>
                    <a className="link link-hover">New Arrivals</a>
                    <a className="link link-hover">Clearance</a>
                </div>
                <div>
                    <span className="footer-title">OUR POLICY</span>
                    <a className="link link-hover">Brands</a>
                    <a className="link link-hover">Contact Us</a>
                    <a className="link link-hover">About</a>
                    <a className="link link-hover">Blog</a>
                    <a className="link link-hover">Blog details</a>
                    <a className="link link-hover">Comming Soon</a>
                    <a className="link link-hover">Shop</a>
                </div>
                <div>
                    <span className="footer-title">GET IN TOUCH</span>
                    <a className="link link-hover">Davis Patrick <br />
                        P.O. Box 147 2546 Sociosqu Rd. <br />
                        Bethlehem Utah 02913</a>
                    <a className="link link-hover">mrishafayet003@gmail.com</a>
                    <a className="link link-hover">+880963-8557887</a>

                </div>
                <div>
                    <span className="footer-title">FOLLOW US</span>
                    <a className="link link-hover"> Facebook</a>
                    <a className="link link-hover"> Twitter</a>
                    <a className="link link-hover"> Instagram</a>
                    <a className="link link-hover"> Pinterest</a>
                    <a className="link link-hover">Youtube</a>
                    <a className="link link-hover">Skype</a>

                </div>

            </footer>
            <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
                <div className="items-center grid-flow-col">
                    <p> &copy; Stooon 2022. Powered with  by <span classNameName='text-yellow-500'>yellow</span>. 2001</p>
                </div>
                <div className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4">
                        <img src={img} alt="" />
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;