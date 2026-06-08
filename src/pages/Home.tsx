import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Hero } from "@/components/Hero";
import { ProjectGallery } from "@/components/ProjectGallery";
import { WhyProjectsMatter } from "@/components/WhyProjectsMatter";
import { HowIBuild } from "@/components/HowIBuild";
import { Capabilities } from "@/components/Capabilities";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Reveal } from "@/components/Reveal";

export function Home() {
  const location = useLocation();

  // Handle "/#section" navigation coming from other routes.
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      // Allow the DOM to render before scrolling.
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      });
    } else {
      window.scrollTo({ top: 0 });
    }
  }, [location]);

  return (
    <>
      <Hero />
      <Reveal>
        <ProjectGallery />
      </Reveal>
      <Reveal>
        <WhyProjectsMatter />
      </Reveal>
      <Reveal>
        <HowIBuild />
      </Reveal>
      <Reveal>
        <Capabilities />
      </Reveal>
      <Reveal>
        <About />
      </Reveal>
      <Reveal>
        <Contact />
      </Reveal>
    </>
  );
}
