import { getAuth } from 'firebase/auth';
import React, { useState, useEffect, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import app from '../firebase/firebase.config';
import { AuthContext } from '../providers/AuthProviders';
const auth = getAuth(app)

const Header = () => {
    const [photoURL, setPhotoURL] = useState('');
    const [displayName, setDisplayName] = useState('');
    const { user, setUser } = useContext(AuthContext) // Add setUser here
    
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
                setDisplayName(user.displayName);
                setPhotoURL(user.photoURL);
            } else {
                setUser(null);
                setDisplayName('');
                setPhotoURL('');
            }
        });
        return () => {
            unsubscribe();
        };
    }, []);
    return (
        <div>
            <div className="navbar bg-gradient-to-r from-green-500 to-yellow-500 font-serif">
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
                    {user ? (
                        <>
                            <div className="mr-20">
                                <div className="group relative flex justify-center">
                                    <button tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <img className="w-10 rounded-full" src={photoURL} alt={displayName} />
                                    </button>
                                    <span className="absolute top-10 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
                                        {displayName}
                                    </span>
                                </div>
                            </div>
                            <button onClick={() => auth.signOut()} className="btn btn-accent">
                                Logout
                            </button>
                        </>
                    ) : (
                        <NavLink to="/login" activeClassName="bg-purple-500">
                            <button className="btn btn-accent">Login</button>
                        </NavLink>
                    )}
                </div>
            </div>
        </div>
    );
};
export default Header;