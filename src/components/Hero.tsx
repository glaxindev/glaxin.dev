import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="hero-grid relative min-h-screen flex items-center justify-center px-4 pt-24 pb-16 overflow-hidden"
    >
      <div className="max-w-2xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-block relative"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-48 sm:h-48 rounded-full bg-slate-400/10 dark:bg-slate-300/10 blur-2xl sm:blur-3xl pointer-events-none hidden dark:block" />
          <img
            src="/images/pfp.jpg"
            alt="Profile Pic"
            className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent mx-auto"
          />
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl text-zinc-900 dark:text-zinc-200 md:text-6xl font-semibold mb-4 tracking-tight"
        >
          Hey, I'm Umair.
          <br />
          Designer & Creator.
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto leading-relaxed"
        >
          Most designers avoid code. Most developers avoid design. I merge both.
          5 years turning ideas into real products.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-row items-center justify-center gap-3 mb-6"
        >
          <Button
            size="lg"
            onClick={scrollToContact}
            className="rounded-2xl px-6 py-3.5"
          >
            Hire Me
          </Button>
          <Badge variant="green" className="px-5 py-3 rounded-full text-sm">
            <span className="inline-block w-2 h-2 rounded-full bg-lime-700 dark:bg-emerald-800 mr-2 animate-pulse" />
            <span className="font-normal hidden md:inline">
              Available For Work
            </span>
            <span className="font-normal md:hidden">Available</span>
          </Badge>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
