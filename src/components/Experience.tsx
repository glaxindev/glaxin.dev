import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "./ui/badge";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      period: "Jul 2024 - Jun 2025",
      position: "Founder",
      company: "axion.dev",
      color: "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300",
    },
    {
      period: "Dec 2022 - Present",
      position: "Educator",
      company: "Hassan Tech",
      color: "bg-pink-100 dark:bg-pink-900/30 text-pink-800 dark:text-pink-300",
    },
    {
      period: "Apr 2024 - Present",
      position: "Frontend Dev",
      company: "Luxus",
      color: "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300",
    },
    {
      period: "Mar 2024 - Present",
      position: "Freelancer",
      company: "Fiverr",
      color: "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300",
    },
    {
      period: "Jan 2021 - Dec 2023",
      position: "Game Developer",
      company: "",
      color: "",
    },
  ];

  return (
    <section id="experience" className="py-24 px-4" ref={ref}>
      <div className="max-w-2xl mx-auto">
        <motion.h2
          initial={{ y: 20, opacity: 0, filter: "blur(10px)" }}
          animate={isInView ? { y: 0, opacity: 1, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-12"
        >
          Work Experience
        </motion.h2>

        <motion.div
          initial={{ y: 20, opacity: 0, filter: "blur(10px)" }}
          animate={isInView ? { y: 0, opacity: 1, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4"
            >
              <span className="text-sm text-muted-foreground whitespace-nowrap">
                {exp.period}
              </span>
              <div className="flex items-center gap-2 flex-1 sm:justify-end">
                <span className="text-foreground">{exp.position}</span>
                {exp.company && (
                  <>
                    <span className="text-muted-foreground">at</span>
                    <Badge variant="outline" className={`${exp.color} rounded-2xl`}>
                      {exp.company}
                    </Badge>
                  </>
                )}
              </div>
            </div>
          ))}
        </motion.div>

        <div className="section-divider mt-24" />
      </div>
    </section>
  );
};

export default Experience;
