import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-orange-50 font-serif">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/' activeClassName="bg-purple-500">Home</Link></li>
                            <li tabIndex={0}>
                                <NavLink to='/blog' activeClassName="bg-purple-500" className="justify-between">
                                    Blog
                                </NavLink>

                            </li>
                        </ul>
                    </div>
                    <h1 className="btn btn-ghost normal-case text-xl">DishDetective</h1>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-xl">
                        <li><NavLink to='/' exact activeClassName="bg-purple-500">Home</NavLink></li>
                        <li tabIndex={0}>
                            <NavLink to='/blog' activeClassName="bg-purple-500">Blog</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="mr-20">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" alt='hello' />
                            </div>
                        </label>
                        <NavLink to='/login' activeClassName="bg-purple-500"><button className="btn btn-accent">Login</button></NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
