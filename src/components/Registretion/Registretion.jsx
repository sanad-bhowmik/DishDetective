import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth } from 'firebase/auth'
import app from '../providers/AuthProvider';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const auth = getAuth(app)
const Registretion = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const name = event.target.name.value;
        const photo = event.target.photo.value;
        console.log(name, email, password);
        if (!email || !password) {
            toast.error('Please enter both email and password');
            return;
        }

        if (password.length < 6) {
            toast.error('Password must be at least 6 characters long');
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                event.target.reset();
                toast.success('Registration successful');
                updateUserData(result.user, name, photo)
            })
            .catch(error => {
                console.error(error);
                toast.error('Registration failed');
            });
    };

    const updateUserData = (user, name, photo) => {
        updateProfile(user, {
            displayName: name, photoURL: photo
        })
            .then(() => {
            })
            .catch(error => {
                console.error(error);
                toast.error('Registration failed');
            });
    }


    return (
        <div>
            <ToastContainer />
            <div className="h-screen bg-gradient-to-br from-teal-400 to-pink-500 flex justify-center items-center">
                <form onSubmit={handleSubmit} className="w-80 p-8 rounded-lg bg-white shadow-lg">
                    <h2 className="text-3xl font-bold mb-4 text-center">Registration</h2>
                    <div className="mb-4">
                        <label htmlFor="name" className="block font-bold text-gray-700 mb-2">Name</label>
                        <input type="name" name='name' placeholder="Type here" className="input input-bordered input-accent w-full max-w-xs" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block font-bold text-gray-700 mb-2">Email</label>
                        <input type="email" name='email' placeholder="Type here" className="input input-bordered input-accent w-full max-w-xs" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block font-bold text-gray-700 mb-2">Password</label>
                        <input type="password" name='password' placeholder="Type here" className="input input-bordered input-accent w-full max-w-xs" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="photourl" className="block font-bold text-gray-700 mb-2">Photo Url</label>
                        <input type="url" name='photo' placeholder="Type here" className="input input-bordered input-accent w-full max-w-xs" />
                    </div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full mb-4">Register</button>
                    <Link to='/login' className="link link-error text-xl pl-10">Have Account? Login</Link>
                </form>
            </div>
        </div>
    );
};

export default Registretion;