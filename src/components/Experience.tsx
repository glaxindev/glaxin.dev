import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "./ui/badge";
import { FaInstagram } from "react-icons/fa";
import { RiLink } from "react-icons/ri";
import { TbBrandFiverr } from "react-icons/tb";
import { CgBee } from "react-icons/cg";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      period: "Apr 2024 - Present",
      position: "Freelancer",
      company: "Fiverr",
      link: "https://fiverr.com/glaxindev",
      bgColor: "bg-green-100 dark:bg-green-900/30",
      borderColor: "border-green-100 dark:border-green-800",
      iconColor: "text-green-600 dark:text-green-300",
      textColor: "text-green-600 dark:text-green-200",
      icon: TbBrandFiverr,
    },
    {
      period: "Oct 2025 - Present",
      position: "Senior Dev",
      company: "Arvo Solutions",
      link: "https://www.arvosolutions.pro/",
      bgColor: "bg-amber-100 dark:bg-amber-900/30",
      borderColor: "border-amber-200 dark:border-amber-800",
      iconColor: "text-amber-700 dark:text-amber-300",
      textColor: "text-amber-800 dark:text-amber-200",
      icon: "default",
    },
    {
      period: "Dec 2022 - Present",
      position: "Educator",
      company: "realglaxin",
      link: "https://www.instagram.com/realglaxin/",
      bgColor: "bg-pink-50 dark:bg-pink-900/30",
      borderColor: "border-pink-100 dark:border-pink-800",
      iconColor: "text-pink-500 dark:text-pink-300",
      textColor: "text-pink-700 dark:text-pink-200",
      icon: FaInstagram,
    },
    {
      period: "Sep 2024 - Jan 2025",
      position: "Web Dev",
      company: "Bumblebee",
      link: "https://bumblebee.glaxin.dev/",
      bgColor: "bg-sky-100 dark:bg-sky-900/30",
      borderColor: "border-sky-100 dark:border-sky-800",
      iconColor: "text-sky-600 dark:text-sky-300",
      textColor: "text-sky-700 dark:text-sky-200",
      icon: CgBee,
    },
    {
      period: "Jan 2020 - Dec 2023",
      position: "Discord Bot Developer",
      company: "",
      link: null,
      bgColor: null,
      borderColor: null,
      iconColor: null,
      textColor: null,
      icon: "default",
    },
  ];

  return (
    <section id="experience" className="py-24 px-4" ref={ref}>
      <div className="max-w-2xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={isInView ? { opacity: 1, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center reveal-up"
        >
          Work Experience
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={isInView ? { opacity: 1, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center
             sm:flex-row sm:items-center sm:text-left
             justify-between gap-2 sm:gap-4 reveal-up"
            >
              <span className="text-md text-muted-foreground whitespace-nowrap">
                {exp.period}
              </span>
              <div className="flex items-center gap-2 flex-1 sm:justify-end">
                <span className="text-foreground">{exp.position}</span>
                {exp.company && (
                  <>
                    <span className="text-muted-foreground">at</span>

                    {exp.link ? (
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={exp.link}
                      >
                        <Badge
                          variant="outline"
                          className={`p-1.5 ${exp.bgColor ?? ""} ${
                            exp.borderColor ?? ""
                          } border rounded-md outline outline-1 outline-offset-[-1px] outline-black/10 flex items-center gap-1.5 hover:opacity-80 transition-opacity cursor-pointer`}
                        >
                          {exp.icon !== "default" ? (
                            <exp.icon
                              className={`${exp.iconColor ?? ""} w-5 h-5`}
                            />
                          ) : (
                            <RiLink
                              className={`${exp.iconColor ?? ""} w-5 h-5`}
                            />
                          )}

                          <div
                            className={`${
                              exp.textColor ?? ""
                            } text-[15px] font-medium leading-relaxed`}
                          >
                            {exp.company}
                          </div>
                        </Badge>
                      </a>
                    ) : (
                      <Badge
                        variant="outline"
                        className={`p-1.5 ${exp.bgColor ?? ""} ${
                          exp.borderColor ?? ""
                        } border rounded-md outline outline-1 outline-offset-[-1px] outline-black/10 flex items-center gap-1.5`}
                      >
                        <div
                          className={`${
                            exp.textColor ?? ""
                          } text-[15px] font-medium leading-relaxed`}
                        >
                          {exp.company}
                        </div>
                      </Badge>
                    )}
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
