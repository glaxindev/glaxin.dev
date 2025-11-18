import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    { name: "My Dope Buddy", color: "from-blue-500 to-purple-600" },
    { name: "Waifu Anime", color: "from-purple-500 to-pink-500" },
  ];

  return (
    <section id="about" className="py-24 px-4" ref={ref}>
      <div className="max-w-2xl mx-auto">
        <motion.h2
          initial={{ y: 20, opacity: 0, filter: "blur(10px)" }}
          animate={isInView ? { y: 0, opacity: 1, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-8"
        >
          About
        </motion.h2>

        <motion.div
          initial={{ y: 20, opacity: 0, filter: "blur(10px)" }}
          animate={isInView ? { y: 0, opacity: 1, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-4 text-muted-foreground leading-relaxed"
        >
          <p>I'm Hassan. Design engineer in Punjab, born in Pakistan.</p>
          
          <p>
            <strong className="text-foreground">Here's what I actually do:</strong> I take your broken interfaces and make them work. Not just "look pretty" - actually function at 60fps while being accessible to everyone.
          </p>

          <p>
            Most designers can't code. Most developers can't design. I do both. While others debate aesthetics, I'm shipping pixel-perfect interfaces that perform. ARIA compliance isn't optional, it's standard.
          </p>

          <p>
            I've built a large developer community on social media because I actually know what I'm talking about. My open-source projects prove it.
          </p>

          <p>
            The result? Interfaces that don't just impress your users - they convert them.
          </p>

          <p>
            When I'm not coding, I'm at the gym or watching anime. Hot chocolate over coffee, always.
          </p>

          <p className="text-foreground font-medium">
            I don't just build interfaces. I build interfaces that work.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0, filter: "blur(10px)" }}
          animate={isInView ? { y: 0, opacity: 1, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 flex flex-wrap gap-6 justify-center"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="w-48 h-56 bg-white dark:bg-card rounded-2xl shadow-lg p-3 rotate-[-2deg] hover:rotate-0 transition-transform duration-300"
            >
              <div className={`w-full h-40 bg-gradient-to-br ${project.color} rounded-2xl mb-3`} />
              <p className="text-sm font-medium text-center text-foreground">{project.name}</p>
            </div>
          ))}
        </motion.div>

        <div className="section-divider mt-24" />
      </div>
    </section>
  );
};

export default About;
