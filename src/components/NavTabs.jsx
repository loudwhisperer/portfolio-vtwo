import React, {useState} from 'react';
import { Link } from 'react-router-dom';


export default function NavTabs(){
  const Links = [
    { name: "About", link: "/react-portfolio", id: 1 },
    { name: "Projects", link: "projects", id: 2 },
    { name: "Blog", link: "blog", id: 3 },
  ];
  let [open, setOpen] = useState(false);
    return (
      <header className="bg-gray-700 p-4 shadow-md w-full fixed top-0 left-0">
        <nav className="md:flex justify-between items-center py-4 md:px-10 px-7">
          <div
            className="font-bold text-2xl cursor-pointer flex items-center 
      text-white sm:text-xl"
          >
            Brendan Borowski
          </div>
            <div
              onClick={() => setOpen(!open)}
              className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
            >
              <ion-icon name={open ? "close" : "menu"}>

              </ion-icon>
              </div>
              <ul
              className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 bg-white':'top-[-490px]'}`}
            >
              {Links.map((link) => {
                return (
                  <li key={link.id} className="ml-10 md:ml-8 text-xl md:my-0 my-7">
                    <Link
                      to={link.link}
                      className="lg:text-white lg:bg-gray-700 sm:text-black hover:text-gray-400 duration-500 focus:text-gray-400"
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
      
        </nav>
      </header>
    );
    }