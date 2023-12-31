import React, { useContext, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import app from '../firebase/firebase.config';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { AuthContext } from '../providers/AuthProviders';


const Login = () => {
    const { signIn } = useContext(AuthContext)
    const emailRef = useRef();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const [user, setUser] = useState(null);

    // googlesign start
    const handleGoogleSignIn = (event) => {
        event.preventDefault();
        // console.log('hello from google');
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setUser(loggedUser)
                navigate(from, { replace: true })
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
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
            })
    }
    //github signin End

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                toast.success('Login successful');
                setUser(loggedUser);
                form.reset();
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
                toast.error(error.message);
            });
    };
    const handleResetPassword = event => {
        const email = emailRef.current.value;
        if (!email) {
            toast.error("Provide email and password");
            return;
        }
        sendPasswordResetEmail(auth, email)
            .then(() => {
                toast.error("Check your Email");
            })
            .catch(error => {
                toast.error(error.message);
            })
    }
    return (
        <div className="h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex justify-center items-center">
            <ToastContainer />
            <form onSubmit={handleLogin} className="w-80 p-8 rounded-lg bg-white shadow-lg">
                <h2 className="text-3xl font-bold mb-4 text-center">Log In</h2>
                <div className="mb-4">
                    <label htmlFor="email" className="block font-bold text-gray-700 mb-2">Email</label>
                    <input type="email" ref={emailRef} name='email' placeholder="Type here" className="input input-bordered input-accent w-full max-w-xs" required />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block font-bold text-gray-700 mb-2">Password</label>
                    <input type="password" name='password' placeholder="Type here" className="input input-bordered input-accent w-full max-w-xs" required />
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full mb-4">Log In</button>
                <button onClick={handleGoogleSignIn} className="bg-gradient-to-br from-red-600 to-orange-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full w-full mb-2">Google</button>
                <button onClick={handleGithubSignIn} className="bg-gray-800 hover:bg-gray-900 mb-6 text-white font-bold py-2 px-4 rounded-full w-full">Github</button>
                <Link to='/registration' className="link link-error text-xl pl-10">New here? Register</Link>
                <button onClick={handleResetPassword} className="link text-lg pl-14">Forget password?</button>
            </form>
        </div>
    );
};

export default Login;
