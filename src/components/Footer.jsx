import React from 'react'
import { Link } from 'react-router-dom';

export default function Footer(){
  const Something = [
    {
      icon: "logo-linkedin",
      link: "https://www.linkedin.com/in/brendan-borowski-886813230 ",
      id: 1,
    },
    {
      icon: "logo-github",
      link: "https://github.com/loudwhisperer",
      id: 2,
    },
    {
      icon: "logo-facebook",
      link: "https://www.facebook.com/brendan.borowski.3",
      id: 3,
    },
    {
      icon: "logo-instagram",
      link: "https://www.instagram.com/driftaway44/",
      id: 4,
    },
    {
      icon: "reader-outline",
      link: "https://docs.google.com/document/d/18neA7nyXalBKuLVg1AQXchO4WKuWT6L3UC83LLzW3vc/edit?usp=sharing",
      id: 5,
    },
  ];
    return (
    <footer className="bg-base-100 m-1 shadow-md w-full fixed bottom-0 left-0">
    <div className="max-w-screen-xl px-2 py-6 mx-auto space-y-6 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center -mx-5 -my-2 z-[-1]">
                   <ul
              className={"flex md:items-center md:pb-0 pb-12 md:static md:z-auto sm:z-auto left-0 w-full md:w-auto md:pl-0 pl-9 sm:flex sm:items-center sm:pb-0 sm:static"
              }
            >
           {Something.map((totem) => {
                return (
                  <li key={totem.id} className="text-4xl lg:mr-10  sm:mr-2 px-5 py-2 sm:text-2xl"> 
                  <Link
                      to={totem.link}
                      className="text-4xl text-white mr-3 pt-2"
                      target="_blank"
                    >
                      <ion-icon name={totem.icon}></ion-icon>
                    </Link>
                  </li>
                );
              })}
              </ul>
        </nav>
        <p className="mt-8 text-base leading-6 text-center text-white">
            © 2023 Brendan Borowski
        </p>
    </div>
</footer>
    );
}