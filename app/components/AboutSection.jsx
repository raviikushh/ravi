"use client"
import React, {useTransition, useState} from 'react'
import Image from 'next/image'
import TabButton from './TabButton'
import Link from 'next/link'
import SkillList from './SkillList'

const TAB_DATA = [
    {
        title : "Skills",
        id : "skills",
        content : <SkillList />
    },
    {
        title : "Education",
        id : "education",
        content : (
            <ul className='list-disc pl-2'>
                <li>B.tech in Computer Science and Engineering</li>
                <li>ITER College, SOA University, Bhubaneswar</li>
            </ul>
        )
    },
    {
        title : "Certifications",
        id : "certifications",
        content : (
            // <ul className='list-disc pl-2'>
            //     <li>Java Certification Course</li>
            //     <li>Certificate in DevOps Internals</li>
            // </ul>
            <div className="flex flex-wrap flex-row justify-between gap-4 md:gap-8 lg:gap-8">
                <Link href="https://drive.google.com/file/d/1UEATBMpW7ge3Vk0EyHJoGDCEtVRdcu0k/view?usp=drive_link" target='_blank' className='mb-4'>
                <Image className='cursor-pointer border-2 rounded-lg border-slate-700 hover:scale-105 transition-all h-44 lg:h-48 mr-3 relative' src="/images/certificates/devops.png" alt='devops' height={300} width={250}/>
                <span className='text-lg lg:mt-2 text-[#ADB7BE] hover:text-white transition-all absolute '>Certificate in DevOps Internals</span>
                </Link>
                <Link href="https://drive.google.com/file/d/1C2zRL4m-xGSxRoMLhuChv_-G_e3mRZiU/view?usp=drive_link" target='_blank'>
                <Image className='cursor-pointer border-2 rounded-lg border-slate-700 hover:scale-105 transition-all h-44 lg:h-48 relative' src="/images/certificates/java.jpg" alt='devops' height={300} width={250}/> 
                <span className='text-lg lg:mt-2 text-[#ADB7BE] hover:text-white transition-all  absolute  '>Java Certification Course</span>
                </Link>
            </div>
            
        )
    }
]


const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [ isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };
  return (
   <section id='about' className='text-white'> <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 sm:py-16'>
        <Image src="/images/about-image.png" height={500} width={500} alt='about-image'/>
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full '>
            <h2 className='text-4xl font-bold text-white mb-4 '>About Me</h2>
            <p className='text-base lg:text-lg '>I'm a final-year B.Tech student in Computer Science with a strong passion for software development. Currently, I'm immersed in ReactJS and Next.js, working towards becoming a proficient MERN stack developer. I've completed projects using HTML, CSS, and JavaScript and actively contribute to open source projects, including Hacktoberfest 2023.</p>
            <div className="flex flex-row justify-start mt-8">
                <TabButton selectTab={()=> handleTabChange("skills")} 
                    active = {tab === "skills"}>
                        {" "}
                    Skills{" "}
                </TabButton>
                <TabButton selectTab={()=> handleTabChange("education")} 
                    active = {tab === "education"}>
                        {" "}
                    Education{" "}
                </TabButton>
                <TabButton selectTab={()=> handleTabChange("certifications")} 
                    active = {tab === "certifications"}>
                        {" "}
                    Certifications{" "}
                </TabButton>
            </div>
            <div className="mt-8 ">{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
    </div></section>
  )
}

export default AboutSection