import React from "react";
import { Link } from 'react-router-dom';
import markTheMiddle from "../../assets/markthemiddle.png";
import theTable from "../../assets/the-table.png"
import weather from "../../assets/weather.png"
import scribe from "../../assets/thescribe.png";
import noteKeeper from "../../assets/notes.png";
import scheduler from "../../assets/page-intro.png";

export default function Projects(){
    let Item = [
    {
      name: "Mark Me in the Middle",
      link: "https://artiecannv.github.io/mark-me-in-the-middle/",
      gitLink: "https://github.com/artiecannv/mark-me-in-the-middle",
      description:
        "Uses the Mapbox JS Framework to utilize a map which will create a line between two points and mark the exact center between the two then using the Four Square API returns mulitple locations in that center point",
      image: markTheMiddle,
      id: 1,
    },
    {
      name: "The Table",
      link: "https://the-table-app.herokuapp.com/",
      gitLink:"https://github.com/loudwhisperer/sturdy-table",
      description:
        "The Table gives users a space to create and manage a board game,video game or tabletop roleplaying meetup. It has emailing built in to notify users attached to a game of thier invite status and the details therein.",
      image: theTable,
      id: 2,
    },
    {
      name: "Weather Application",
      link: "https://loudwhisperer.github.io/info-for-the-stormy-folks/",
      gitLink:"https://github.com/loudwhisperer/info-for-the-stormy-folks",
      description:
        "Allows users to check a five dat forecast of the current weather in their location and saves prior searches so there is no need to query again",
      image: weather,
      id: 3,
    },
    {
      name: "The Scribe",
      link: "https://the-scribe.herokuapp.com/",
      gitLink:"https://github.com/josht-dev/the-scribe",
      description:"A Reddit-like forum with a user profile that stores information for Dungeon Masters and GM's alike",
      image: scribe,
      id: 4,
      style: {paddingBottom: "3rem"}
    },
    {
      name: "Note Keeper",
      link: "https://notekeeper-guide-thingy.herokuapp.com/",
      gitLink:"https://github.com/loudwhisperer/notekeeper-guide-thingy",
      description:
        "Utilizes Express JS and Sequelize to create API routes that allow users to create, save and a simplfied database (JSON DB) of their previous notes",
      image: noteKeeper,
      id: 5,
    },
    {
      name: "Work Day Scheduler",
      link: "https://loudwhisperer.github.io/supreme-couscous-scheduler-ultra/",
      gitLink:"https://github.com/loudwhisperer/supreme-couscous-scheduler-ultra",
      description:
        "Utilizes Bootstrap CSS, Dayjs, Jquery and Local Storage to give the user the ability to scedule their workday by hour and save those times to local storage by hour.",
      image: scheduler,
      id: 6,
    },
  ];
return(
     <section className="flex justify-center align-center h-fit flex-wrap ml-44 mr-44 mb-32 mt-28 sm:ml-0 sm:mr-0 z-10 ">
      { Item.map((project) => {
        return(
      <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 w-4/5 group" key={project.id} id="projCards">
        <div className="relative overflow-hidden">
        <img src={project.image} className="w-full object-cover"/>
            <div className="absolute h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 text-center">
                  <div className="bg-black/80 text-white w-full h-full text-center px-6 pt-3 flex flex-wrap justify-center">
                    {project.description}
                    <Link
                      to={project.link}
                      className="text-4xl text-white px-3"
                      target="_blank"
                      style={project.style}
                       >
                      <ion-icon name="unlink"></ion-icon>
                    </Link>
                       <Link
                      to={project.gitLink}
                      className="text-4xl text-white"
                      target="_blank"
                       >
                      <ion-icon name="logo-github"></ion-icon>
                    </Link>
                    </div>
                  </div>
        </div>
        </div>
        )
})}
    </section>
)
}