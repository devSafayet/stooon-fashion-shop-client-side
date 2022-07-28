import React from 'react';
import { signOut } from 'firebase/auth';
import logo from '../../../images/logo.png';
import { useLocation } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import 'font-awesome/css/font-awesome.min.css';

const Header = () => {
    // const [dark, setDark] = useState(false);
    const { pathname } = useLocation();

    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    };
    const menu = <>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="#">DASHBOARD</Link></li>
        <li><Link to="/shop">SHOP</Link></li>
        <li><Link to="#">PAGES</Link></li>
        <li><Link to="#">ABOUT US</Link></li>
        <li><Link to="#">CONTACT US</Link></li>

    </>

    return (
        <div>
            {/* header section  */}
            <div className='bg-base-200 lg:flex justify-between pt-2 pb-2'>
                <div className='flex gap-3 ps-3 pl-4' style={{ color: "#AEADA4" }}>
                    <div className='flex gap-1'>
                        <i class="fa fa-phone pt-1" aria-hidden="true"></i>
                        <h3>  +880963-8557887</h3>
                    </div>
                    <div className='flex gap-1'>
                        <i class="fa fa-envelope-o pt-1" aria-hidden="true"></i>
                        <h3> mrishafayet003@gmail.com</h3>
                    </div>


                </div>
                <div className=''>
                    <h2> FREE SHIPPING - on all orders over $35*</h2>
                </div>
                <div className='flex gap-3'>

                    <div className='flex gap-1'>
                        <i class="fa fa-user pt-1"></i>

                        <li style={{ listStyle: "none" }}>{
                            user ? <button className="btn btn-ghost" onClick={logout} >SIGN OUT</button> : <Link to="/login">Login</Link>}</li>
                    </div>
                    <div className='flex gap-1 pr-4'>
                        <i class="fa fa-lock pt-1"></i>

                        <li style={{ listStyle: "none" }}><Link to="/register">Register</Link></li>
                    </div>

                </div>

            </div>
            {/* navigation sections */}
            {/* <div>
                <div class='bg-yellow-500 drawer drawer-end'>
                    <input id='my-drawer-3' type='checkbox' class='drawer-toggle' />
                    <div class='drawer-content flex flex-col bg-black'>
                        <div class='w-full navbar bg-base-100 top-0 z-50 lg:px-20'>

                            <div class='flex-1 px-2 mx-2 text-2xl'>
                                <img src={logo} alt="" />
                            </div>
                            <div class='flex-none lg:hidden'>
                                <label for='my-drawer-3' class='btn btn-square btn-ghost'>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='none'
                                        viewBox='0 0 24 24'
                                        class='inline-block w-6 h-6 stroke-current'
                                    >
                                        <path
                                            stroke-linecap='round'
                                            stroke-linejoin='round'
                                            stroke-width='2'
                                            d='M4 6h16M4 12h16M4 18h16'
                                        ></path>
                                    </svg>
                                </label>
                            </div>

                            <div class='flex-none hidden lg:block'>
                                <ul class='menu menu-horizontal gap-x-2'>
                                    {menuItems}
                                </ul>
                            </div>
                        </div>

                    </div>
                    <div class='drawer-side'>
                        <label for='my-drawer-3' class='drawer-overlay'></label>

                        <ul class='menu p-4 overflow-y-auto w-80 bg-base-100'>
                            {menuItems}

                        </ul>

                    </div>
                </div>
            </div> */}

            <div className="navbar sticky top-0 z-50 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menu}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case">
                        <img src={logo} alt="" />
                    </a>
                </div>
                <div className="lg:navbar-end navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menu}
                    </ul>
                </div>
                {pathname.includes("dashbord") && <div className="navbar-end lg:hidden">
                    <label tabIndex="1" htmlFor="dashbord-slider" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                </div>}

            </div>
        </div >
    );
};

export default Header;