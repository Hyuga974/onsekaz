// src/components/Navbar.js

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const Header = () => {

  const authContext = useContext(AuthContext);

  return (
    <div className="navbar bg-base-200">
        <div className="navbar-start">
            <a className="btn btn-ghost normal-case text-xl" href='/'>On se Kaze</a>
        </div>
        {/*<div className="navbar-center flex">
            <ul className="menu menu-horizontal px-1">
                <div className="form-control">
                    <div className="input-group">
                        <input type="text" placeholder="Search…" className="input input-bordered" />
                        <input type="text" placeholder="Date" className="input input-bordered w-28" />
                        <button className="btn btn-square">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>
            </ul>
        </div>*/}
        <div className="navbar-end">
          { authContext?.isLoggedIn === true ? (
            <div className="dropdown dropdown-end">
            <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </label>
            <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <a className="justify-between">
                  Profile
                </a>
              </li>
              <li><a>My Publications</a></li>
              <li><a onClick={() => authContext.onLogout()} className='text-red-500'>Logout</a></li> {/* TODO: add a confirmation modal */}
            </ul>
          </div>
          ) : (
          <Link to={`/connect`} className="btn btn-outline">
            GET STARTED
          </Link>
          )}
        </div>
    </div>
  );
};

export default Header;
