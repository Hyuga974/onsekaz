import React, { useContext, useState } from 'react';
import Header from './Header';
import AuthContext from '../context/AuthContext';

const AuthForm: React.FC = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const authContext = useContext(AuthContext);

  const switchForm = (isLogin: boolean) => {
    setIsLoginForm(isLogin);
  };

  // inside your AuthForm component
const handleSubmit = async (e: any) => {
    e.preventDefault();

    const endpoint = isLoginForm ? '/auth/login' : '/auth/register' ; // Choose the endpoint based on the form state
    const url = `http://localhost:3000${endpoint}`; // Replace with your server URL if different

    try {
        const FormData = {
            email: e.target.email.value,
            password: e.target.password.value,
        };
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include', // This allows the browser to handle and store the cookie
            body: JSON.stringify(FormData),
        });

        const data = await response.json();

        if (response.ok) {
            authContext?.onLogin(e.target.email.value, e.target.password.value);
            window.location.href = '/';
        } else {
            const errorDiv = document.getElementById('error');
            if (errorDiv) {
                errorDiv.textContent = data.message;
            }
        }
    } catch (error) {
        console.error('An unexpected error occurred:', error);
    }
};

  return (
        <div className="w-full max-w-md mx-auto mt-10">
            <div className="tabs w-full flex">
                <a className={`tab w-1/2 tab-bordered${isLoginForm ? ' tab-active text-blue-400' : '' }`} onClick={()=>
                    switchForm(true)}
                    >
                    Login
                </a>
                <a className={`tab w-1/2 tab-bordered${!isLoginForm ? ' tab-active text-blue-400' : '' }`} onClick={()=>
                    switchForm(false)}
                    >
                    Register
                </a>
            </div>
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
            <div className="text-red-500 text-xs italic mb-4" id="error">

            </div>
                {!isLoginForm && (
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Username
                    </label>
                    <input
                        className="input input-primary w-full"
                        id="username" type="text" placeholder="Username" />
                </div>
                )}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="input input-primary w-full"
                        id="email" type="email" placeholder="Email" name='email' />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="input input-primary w-full"
                        id="password" type="password" placeholder="Password" name='password' />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit">
                        {isLoginForm ? 'Login' : 'Register'}
                    </button>
                </div>
            </form>
        </div>
  );
};

export default AuthForm;
