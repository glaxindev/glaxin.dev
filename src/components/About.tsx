import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const cards = [
    { name: "My Dev Buddy", image: "/images/about/vscode.png" },
    { name: "I Love React", image: "/images/about/reactjs.webp" },
  ];

  return (
    <section id="about" className="py-24 px-4" ref={ref}>
      <div className="max-w-2xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={isInView ? { opacity: 1, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold mb-8 reveal-up"
        >
          About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={isInView ? { opacity: 1, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-4 text-muted-foreground leading-relaxed reveal-up"
        >
          <p>
            I'm Umair, better known online as Glaxin. A full-stack developer and
            designer based in Pakistan.
          </p>

          <p>
            <strong className="text-zinc-600 dark:text-zinc-300 font-semibold">
              What I actually do:
            </strong>{" "}
            I take messy, outdated, or broken digital experiences and turn them
            into clean, high-performance products. Not just good-looking but
            fast, accessible, and built to scale.
          </p>

          <p>
            Most designers don’t understand engineering. Most developers ignore
            design. I bridge both. While others argue about visuals, I’m
            shipping refined, production-ready interfaces with real performance.
            Accessibility isn’t an extra, it’s the baseline.
          </p>

          <p>
            I’ve grown an active developer audience online by sharing what I
            know and building things that genuinely help people. My open-source
            work speaks for itself.
          </p>

          <p>
            The outcome? Experiences that not only impress users, they convert,
            retain, and build trust over time.
          </p>

          <p>
            When I'm not building products, I'm usually sketching ideas or
            tweaking side projects. And yes, clean minimal UIs beat cluttered
            layouts every time.
          </p>

          <p className="font-medium">
            I don’t just build products. I build products that work.
          </p>
        </motion.div>

        <div className="mt-12 flex flex-wrap gap-6 justify-center">
          {cards.map((card, index) => (
            <div
              key={index}
              className="w-48 h-56 bg-white dark:bg-card rounded-sm shadow-xl border border-zinc-200/80 dark:border-zinc-900 p-3 rotate-[-2deg] transition-transform duration-300"
            >
              <img
                src={card.image}
                alt={card.name}
                className={`w-full h-40 mb-3 rounded-sm aspect-square`}
              />
              <p className="text-sm font-normal text-center text-zinc-600 dark:text-zinc-300 tracking-wide italic">
                {card.name}
              </p>
            </div>
          ))}
        </div>

        <div className="section-divider mt-24" />
      </div>
    </section>
  );
};

export default About;
