import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import AboutSection from "./components/AboutSection"
import ProjectsSection from "./components/ProjectsSection"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-900  px-12 py-4">
        <Navbar />
        <div className="container mt-24 mx-auto">
        <HeroSection />
        <AboutSection />  
        <ProjectsSection />
        </div>
    </main>
  )
}
