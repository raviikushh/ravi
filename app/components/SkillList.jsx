import React from 'react'


const SkillList = () => {
    const skills = ["HTML","CSS","JavaScript","NodeJs","NextJs","ReactJs","ExpressJs","MongoDB","Tailwind Css","JAVA","Python","AWS","Terraform","BashScript"];
     return (
        <div className="container flex flex-wrap gap-6 justify-around"> 
        {skills.map((item,index) =>  (<h3 key={item} className='bg-gray-800 border-b-2 w-fit py-1 text-center rounded-lg px-3 border-purple-500 cursor-pointer  hover:scale-105 hover:border-cyan-500'>{item}</h3>))}
        </div>
  )
}

export default SkillList