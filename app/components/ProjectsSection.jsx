import React from 'react'
import ProjectCard from './ProjectCard'

const projectsData = [
    {
        id: 1,
        title : "Euphoria",
        description: "Made Using HTML, CSS, JS and BootsTrap Framework. Play each card and enjoy music",
        image : "/images/projects/1.png",
        gitUrl : "https://github.com/raviikushh/Euphoria",
        previewUrl : "https://euphoriaold.vercel.app"
    },
    {
        id: 2,
        title : "Euphoria 2.0",
        description: "The Better and user friendly version of Euphoria , fully responsive. Enjoy the new dark theme ",
        image : "/images/projects/2.png",
        gitUrl : "https://github.com/raviikushh/Euphoria2.0",
        previewUrl : "https://euphoria2.vercel.app"
    },
    {
        id: 3,
        title : "Realtime Weather web App",
        description: "Tech Stack: HTML, Css & JS and realtime weather stats is fetching using Rapid API",
        image : "/images/projects/3.png",
        gitUrl : "https://github.com/raviikushh/realtimeweather",
        previewUrl : "https://raviikushh.github.io/realtimeweather"
    },
    {
        id: 4,
        title : "Random Password Generator",
        description: "Generate a complex password with variable lengths, copy it and use wherever you want.",
        image : "/images/projects/4.png",
        gitUrl : "https://github.com/raviikushh/GenRandomPassword",
        previewUrl : "https://raviikushh.github.io/GenRandomPassword"
    },
    {
        id: 5,
        title : "Color Flipper",
        description: "Generate a unlimited random hex color code to use it in your website. Copy & Use.",
        image : "/images/projects/5.png",
        gitUrl : "https://github.com/raviikushh/ColorFlipper",
        previewUrl : "https://raviikushh.github.io/ColorFlipper"
    },
    {
        id: 6,
        title : "Todo List",
        description: "Add your daily task here and it will be locally saved. Add or remove task whenever you want.",
        image : "/images/projects/6.png",
        gitUrl : "https://github.com/raviikushh/todolist",
        previewUrl : "https://raviikushh.github.io/todolist"
    },
    {
        id: 7,
        title : "Calculator",
        description: "Tech Stack: HTML, CSS, JS. DO Your Daily Calculations",
        image : "/images/projects/7.png",
        gitUrl : "https://github.com/raviikushh/Calculator",
        previewUrl : "https://raviikushh.github.io/Calculator"
    },
    {
        id: 8,
        title : "waiting.......",
        description: "waiting......",
        image : "/images/projects/8.png",
        gitUrl : "#",
        previewUrl : "#"
    },
    {
        id: 8,
        title : "waiting.......",
        description: "waiting......",
        image : "/images/projects/8.png",
        gitUrl : "#",
        previewUrl : "#"
    }
] ;

const ProjectsSection = () => {
  return (
    <>
        <h2 id='projects' className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>My Projects</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 cover gap-8 md:gap-12'>
        {projectsData.map((project) => <ProjectCard 
          key={project.id}
          title={project.title}
          description={project.description} 
          imgUrl={project.image} 
          gitUrl={project.gitUrl}
          previewUrl={project.previewUrl}
          />)}</div>

    </>
  )
}

export default ProjectsSection