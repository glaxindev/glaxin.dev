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
      className="relative min-h-screen flex items-center justify-center px-4 pt-24 pb-16 overflow-hidden"
    >
      {/* Animated gradient blobs - only visible in dark mode */}
      <div className="absolute inset-0 pointer-events-none dark:opacity-100 opacity-0 transition-opacity duration-500">
        <div
          className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full opacity-20 blur-[120px] animate-blob-1"
          style={{
            background:
              "radial-gradient(circle, hsl(180, 80%, 50%) 0%, transparent 70%)",
            mixBlendMode: "screen",
            animation: "blob-float-1 25s ease-in-out infinite",
          }}
        />
        <div
          className="absolute top-1/3 right-1/4 w-[350px] h-[350px] rounded-full opacity-15 blur-[100px] animate-blob-2"
          style={{
            background:
              "radial-gradient(circle, hsl(200, 85%, 55%) 0%, transparent 70%)",
            mixBlendMode: "screen",
            animation: "blob-float-2 30s ease-in-out infinite",
          }}
        />
        <div
          className="absolute bottom-1/3 left-1/3 w-[300px] h-[300px] rounded-full opacity-25 blur-[110px] animate-blob-3"
          style={{
            background:
              "radial-gradient(circle, hsl(190, 75%, 60%) 0%, transparent 70%)",
            mixBlendMode: "screen",
            animation: "blob-float-3 20s ease-in-out infinite",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-[280px] h-[280px] rounded-full opacity-10 blur-[90px] animate-blob-4"
          style={{
            background:
              "radial-gradient(circle, hsl(260, 70%, 60%) 0%, transparent 70%)",
            mixBlendMode: "screen",
            animation: "blob-float-4 35s ease-in-out infinite",
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/3 w-[320px] h-[320px] rounded-full opacity-18 blur-[105px] animate-blob-5"
          style={{
            background:
              "radial-gradient(circle, hsl(220, 80%, 58%) 0%, transparent 70%)",
            mixBlendMode: "screen",
            animation: "blob-float-5 28s ease-in-out infinite",
          }}
        />
      </div>

      <div className="max-w-2xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-block"
        >
          <img
            src="/images/pfp.jpg"
            alt="Profile Pic"
            className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent mx-auto"
          />
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0, filter: "blur(10px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl text-zinc-900 dark:text-zinc-200 md:text-6xl font-semibold mb-4 tracking-tight"
        >
          Hey, I'm Umair.
          <br />
          Designer & Creator.
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0, filter: "blur(10px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto leading-relaxed"
        >
          Most designers avoid code. Most developers avoid design. I merge both.
          5 years turning ideas into real products.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0, filter: "blur(10px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-row items-center justify-center gap-3 mb-6"
        >
          <Button
            size="lg"
            onClick={scrollToContact}
            className="rounded-2xl px-6 py-3.5"
          >
            Hire me
          </Button>
          <Badge variant="green" className="px-5 py-3 rounded-full text-sm">
            <span className="inline-block w-2 h-2 rounded-full bg-lime-700 dark:bg-lime-800 mr-2 animate-pulse opacity-75" />
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
