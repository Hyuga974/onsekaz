import React from 'react';
interface NavbarProps {
    images: string[];
}

const Navbar: React.FC<NavbarProps> = ({ images }) => {
  return (
    <div className="navbar bg-base-200">
        <div className="navbar-start">
            <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div className="navbar-center flex">
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
        </div>
        <div className="navbar-end">
            <a className="btn">Get started</a>
        </div>
    </div>
  );
};

export default Navbar;