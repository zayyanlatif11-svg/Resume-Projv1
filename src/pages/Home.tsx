import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Hero } from "@/components/Hero";
import { Capabilities } from "@/components/Capabilities";
import { ProjectGallery } from "@/components/ProjectGallery";
import { WhyProjectsMatter } from "@/components/WhyProjectsMatter";
import { HowIBuild } from "@/components/HowIBuild";
import { CaseStudyPreviews } from "@/components/CaseStudyPreviews";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";

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
      <Capabilities />
      <ProjectGallery />
      <WhyProjectsMatter />
      <HowIBuild />
      <CaseStudyPreviews />
      <About />
      <Contact />
    </>
  );
}
