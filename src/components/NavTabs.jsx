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
<div className="navbar bg-base-100 w-full fixed top-0 left-0">
  <div className="navbar-start"></div>
  <div className="navbar-center">
 <div className="dropdown dropdown-end" onClick={() => setShowNav(true)}>
      <label tabIndex={0} >
         <p className="btn btn-ghost normal-case text-xl">- Brendan Borowski -</p>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
       {Links.map((link) =>{
        return(
          <li><Link to={link.link} key={link.id} className="ted" onClick={closeMenu}>{link.name}</Link></li>
        )
       })}
      </ul>
    </div>
  </div>
  <div className="navbar-end">
  </div>
  </div>
    );
    }