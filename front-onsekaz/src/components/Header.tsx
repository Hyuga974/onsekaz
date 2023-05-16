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
        <div className="navbar-center flex">
          <div className="flex items-stretch">
            <Link to='/annonces' className="btn btn-ghost rounded-btn">Annonces</Link>
            <Link to='/map' className="btn btn-ghost rounded-btn">Map</Link>
            </div>
        </div>
        <div className="navbar-end">
          { authContext?.isLoggedIn === true ? (
            <div className="dropdown dropdown-end">
            <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="src/assets/default.png" />
              </div>
            </label>
            <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <a className="justify-between">
                  Profile
                </a>
              </li>
              <li><Link to='/my-reservations' className="justify-between">My Reservations</Link></li>
              <li><Link to='/my-reviews' className="justify-between">My Reviews</Link></li>
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
