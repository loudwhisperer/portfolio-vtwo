import React, {useState} from 'react';
import { Link } from 'react-router-dom';

export default function NavTabs(){
const [showNav, setShowNav] = useState(false)
  
function closeMenu(){
    document.getElementsByClassName("ted").style.display = "none"
  }

  const Links = [
    { name: "About", link: "about", id: 1 },
    { name: "Projects", link: "projects", id: 2 },
    { name: "Blog", link: "blog", id: 3 },
  ];
  
    return (
      <div className="navbar w-full fixed top-0 left-0 z-50 flex">
        <div className="navbar-start">
          {/* <div
            className="dropdown dropdown-end"
            onClick={() => setShowNav(true)}
          >
            <label tabIndex={0}>
              <p className="btn btn-ghost normal-case text-9xl ml-10 fill-current">
                <ion-icon name="flower-outline" key="1"></ion-icon>
              </p>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {Links.map((link) => {
                return (
                  <li>
                    <Link
                      to={link.link}
                      key={link.id}
                      className="ted"
                      onClick={closeMenu}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div> */}
        </div>
        <div className="navbar-center">
          <div
            className="dropdown lg:dropdown-right sm:dropdown-end"
            onClick={() => setShowNav(true)}
          >
            <label tabIndex={0}>
              <p className="btn btn-ghost normal-case fill-inherit w-32 h-32">
                <span className="text-9xl justify-center">
                  <ion-icon name="flower-outline" key="4"></ion-icon>
                </span>
              </p>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 ml-2"
            >
              {Links.map((link) => {
                return (
                  <li>
                    <Link
                      to={link.link}
                      key={link.id}
                      className="ted"
                      onClick={closeMenu}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="navbar-end"></div>
      </div>
    );
    }