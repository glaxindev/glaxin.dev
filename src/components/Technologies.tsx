import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

import {
  SiNodedotjs,
  SiReact,
  SiFigma,
  SiMongodb,
  SiTailwindcss,
} from "react-icons/si";
import { FiGitBranch } from "react-icons/fi";
import { FaPython } from "react-icons/fa6";
import { BiLogoTypescript } from "react-icons/bi";

const Technologies = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const technologies = [
    {
      name: "Python",
      description: "Programming Language",
      icon: FaPython,
      color:
        "from-blue-400/20 to-yellow-400/20 dark:from-blue-500/20 dark:to-yellow-500/20",
      iconColor: "text-blue-500 dark:text-blue-400",
    },
    {
      name: "NodeJS",
      description: "JavaScript Runtime",
      icon: SiNodedotjs,
      color:
        "from-green-400/20 to-green-600/20 dark:from-green-500/20 dark:to-green-600/20",
      iconColor: "text-green-600 dark:text-green-400",
    },
    {
      name: "React",
      description: "JavaScript Framework",
      icon: SiReact,
      color:
        "from-cyan-400/20 to-blue-500/20 dark:from-cyan-500/20 dark:to-blue-600/20",
      iconColor: "text-cyan-500 dark:text-cyan-400",
    },
    {
      name: "Figma",
      description: "User Interface Design",
      icon: SiFigma,
      color:
        "from-purple-400/20 to-pink-500/20 dark:from-purple-500/20 dark:to-pink-600/20",
      iconColor: "text-purple-500 dark:text-purple-400",
    },
    {
      name: "TypeScript",
      description: "JavaScript but better",
      icon: BiLogoTypescript,
      color:
        "from-blue-500/20 to-blue-600/20 dark:from-blue-600/20 dark:to-blue-700/20",
      iconColor: "text-blue-600 dark:text-blue-400",
    },
    {
      name: "Git",
      description: "Version Control System",
      icon: FiGitBranch,
      color:
        "from-orange-400/20 to-red-500/20 dark:from-orange-500/20 dark:to-red-600/20",
      iconColor: "text-orange-600 dark:text-orange-400",
    },
    {
      name: "MongoDB",
      description: "NoSQL Document Database",
      icon: SiMongodb,
      color:
        "from-green-500/20 to-emerald-600/20 dark:from-green-600/20 dark:to-emerald-700/20",
      iconColor: "text-green-600 dark:text-green-400",
    },
    {
      name: "Tailwind",
      description: "CSS Styling Framework",
      icon: SiTailwindcss,
      color:
        "from-cyan-400/20 to-blue-500/20 dark:from-cyan-500/20 dark:to-blue-600/20",
      iconColor: "text-cyan-500 dark:text-cyan-400",
    },
  ];

  return (
    <section id="technologies" className="py-24 px-4" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={isInView ? { opacity: 1, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold mb-4 reveal-up"
        >
          Current Technologies
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={isInView ? { opacity: 1, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-muted-foreground mb-12 reveal-up"
        >
          I'm proficient in a range of modern technologies that empower me to
          build highly functional solutions, crafted with purpose. These are
          some of my main technologies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={isInView ? { opacity: 1, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={index}
                className="group relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 overflow-hidden reveal-up"
              >
                {/* decorative gradient background (keeps behind card content) */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${tech.color} rounded-2xl pointer-events-none`}
                />

                <div className="relative flex items-start gap-4">
                  {/* Icon wrapper:
                      - bg brightens on hover in light: group-hover:bg-white/30
                      - in dark mode it brightens slightly different: dark:group-hover:bg-white/10
                      - subtle scale on hover and smooth transition
                  */}
                  <div className="p-3 bg-background/80 rounded-2xl transition-all duration-300 transform group-hover:scale-[1.03] group-hover:bg-white/30 dark:group-hover:bg-white/5">
                    <Icon
                      className={`w-8 h-8 ${tech.iconColor} transition-all duration-300 transform group-hover:scale-[1.03] group-hover:brightness-125 dark:group-hover:brightness-90`}
                    />
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {tech.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {tech.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>

        <div className="section-divider mt-24" />
      </div>
    </section>
  );
};

export default Technologies;
