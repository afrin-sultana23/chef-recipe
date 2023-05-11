import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';
import { Tooltip } from 'react-tooltip';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {

      })
      .catch(error => {
        console.log(error);
      })
  }
  return (
    <>
      
      <div className='mx-auto md:max-w-5xl'>
        <div className="navbar bg-base-100 mb-2">
          <div className="navbar-start">
            <div className="dropdown">
             
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>
              <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                  <NavLink
                    to="/chefs"
                    className={({ isActive, isPending }) =>
                      isActive ? "font-bold text-lg text-red-400" : ""
                    }
                  >
                    Chefs
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/blogs"
                    className={({ isActive, isPending }) =>
                      isActive ? "font-bold text-lg text-red-400" : ""
                    }
                  >
                    Blogs
                  </NavLink>
                </li>
              </ul>
            </div>
            <Link to='/' className="font-bold text-red-400 normal-case text-xl md:text-5xl">
              Food Feast
            </Link>
          </div>
          
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isActive ? "font-bold text-lg text-red-400" : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/chefs"
                  className={({ isActive, isPending }) =>
                    isActive ? "font-bold text-lg text-red-400" : ""
                  }
                >
                  Chefs
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blogs"
                  className={({ isActive, isPending }) =>
                    isActive ? "font-bold text-lg text-red-400" : ""
                  }
                >
                  Blogs
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            { user ?
              /* User avater */
              <div className="dropdown dropdown-end">
                <div data-tooltip-id="my-tooltip" data-tooltip-content={user?.displayName || ''} className='m-0 p-0'>
                  <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                      <img src={user?.photoURL || 'https://www.emmegi.co.uk/wp-content/uploads/2019/01/User-Icon.jpg'} alt='' />
                    </div>
                  </label>
                </div>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                  <li>
                    <Link to='/user-profile'>
                      Profile
                    </Link>
                  </li>
                  <li>
                    <button onClick={handleLogOut}>Log out</button>
                  </li>
                </ul>
              </div>
              /* profile picture end */
              :
              <>
                <Link to='/access/login' className="btn btn-ghost px-5 py-0">
                  login
                </Link>
              </>
            }
          </div>
        </div>
      </div >
      <Tooltip id="my-tooltip" />
    </>
  );
};

export default Header;