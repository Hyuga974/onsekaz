import React, { useState } from 'react';
import Header from './Header';

const AuthForm: React.FC = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);

  const switchForm = (isLogin: boolean) => {
    setIsLoginForm(isLogin);
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
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                {!isLoginForm && (
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Username
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username" type="text" placeholder="Username" />
                </div>
                )}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email" type="email" placeholder="Email" />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="password" type="password" placeholder="Password" />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button">
                        {isLoginForm ? 'Login' : 'Register'}
                    </button>
                </div>
            </form>
        </div>
  );
};

export default AuthForm;
