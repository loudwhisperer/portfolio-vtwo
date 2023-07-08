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
<footer className="footer p-4 text-neutral-content w-full fixed bottom-0 left-0 menu" >
  <div className="grid-flow-col lg:gap-28 place-self-center justify-self-center">
                {Something.map((totem) => {
                return (
                  
                  <Link
                      to={totem.link}
                      className="text-4xl text-white mr-3 pt-2 fill-current"
                      target="_blank"
                      key={totem.id}
                    >
                      <ion-icon name={totem.icon}></ion-icon>
                    </Link>
                );
              })}
  </div>
</footer>
    );
}