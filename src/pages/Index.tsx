import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Technologies from "@/components/Technologies";
import Experience from "@/components/Experience";
import Workflow from "@/components/Workflow";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

import { ReactLenis } from "lenis/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Index = () => {
  useGSAP(() => {
    const elements = gsap.utils.toArray<HTMLElement>(".reveal-up");

    elements.forEach((element) => {
      gsap.fromTo(
        element,
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: element,
            start: "top 90%",
            end: "top 50%",
            scrub: 1.2,
            markers: false,
          },
          duration: 1.8,
          ease: "power4.out",
        }
      );
    });
  });

  return (
    <ReactLenis root>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Technologies />
          <Experience />
          <Workflow />
          <Contact />
        </main>
        <Footer />
      </div>
    </ReactLenis>
  );
};

export default Index;
