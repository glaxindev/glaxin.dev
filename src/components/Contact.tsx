import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "./ui/button";
import { Mail, Github } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 px-4" ref={ref}>
      <div className="max-w-2xl mx-auto text-center">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-6"
        >
          Get in touch
        </motion.h2>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-muted-foreground mb-8 max-w-lg mx-auto leading-relaxed"
        >
          Building something that needs to convert? Need a design engineer who actually ships products that make money? I'm down to work on projects that solve real problems. Hit me up if you're serious about results.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button size="lg" className="rounded-full px-8" asChild>
            <a href="mailto:contact@hassanx.tech">
              <Mail className="mr-2 h-4 w-4" />
              Send Message
            </a>
          </Button>
          <span className="text-muted-foreground">or</span>
          <Button size="lg" variant="outline" className="rounded-full px-8" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              Reach Me
            </a>
          </Button>
        </motion.div>

        <div className="section-divider mt-24" />
      </div>
    </section>
  );
};

export default Contact;
