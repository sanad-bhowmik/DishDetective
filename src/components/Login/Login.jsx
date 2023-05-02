import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import app from '../providers/AuthProvider';

const Login = () => {
    const [user, setUser] = useState(null)

    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();


    // googlesign start
    const handleGoogleSignIn = (event) => {
        event.preventDefault();
        // console.log('hello from google');
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setUser(loggedUser)
            })
            .catch(error => {
                console.log('error', error.message);
            })
    }
    // googlesign end

    //github signin start
    const handleGithubSignIn = event => {
        event.preventDefault();
        signInWithPopup(auth, githubProvider)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setUser(loggedUser);
            })
            .catch(error => {
                console.log(error);
            })
    }
    //github signin End

    return (
        <div className="h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex justify-center items-center">
            <form className="w-80 p-8 rounded-lg bg-white shadow-lg">
                <h2 className="text-3xl font-bold mb-4 text-center">Log In</h2>
                <div className="mb-4">
                    <label htmlFor="email" className="block font-bold text-gray-700 mb-2">Email</label>
                    <input type="email" name='email' placeholder="Type here" className="input input-bordered input-accent w-full max-w-xs" />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block font-bold text-gray-700 mb-2">Password</label>
                    <input type="password" name='password' placeholder="Type here" className="input input-bordered input-accent w-full max-w-xs" />
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full mb-4">Log In</button>
                <button onClick={handleGoogleSignIn} className="bg-gradient-to-br from-red-600 to-orange-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full w-full mb-2">Google</button>
                <button onClick={handleGithubSignIn} className="bg-gray-800 hover:bg-gray-900 mb-6 text-white font-bold py-2 px-4 rounded-full w-full">Github</button>
                <Link to='/registration' className="link link-error text-xl pl-10">New here? Register</Link>
            </form>
        </div>
    );
};

export default Login;
