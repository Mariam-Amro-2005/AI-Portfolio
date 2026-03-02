import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";
import { hero, about, education,
          experience, project, skill, 
          certificate, contact 
        } from "@/lib/data";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero {...hero}/>
      <About {...about}/>
      <Education {...education}/>
      <Experience {...experience} />
      <Projects {...project}/>
      <Skills {...skill}/>
      <Certifications {...certificate}/>
      <Contact {...contact}/>
    </main>
  );
}
