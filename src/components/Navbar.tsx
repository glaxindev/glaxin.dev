import { Home, Mail, Moon, Sun, Github, Linkedin, Twitter, Instagram, Youtube } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "@/contexts/ThemeContext";
import { motion } from "framer-motion";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 px-4 sm:px-6 py-3 bg-background/80 backdrop-blur-lg border border-border rounded-2xl shadow-lg max-w-fit"
    >
      <div className="flex items-center gap-1 sm:gap-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => scrollToSection("home")}
          className="rounded-2xl h-9 w-9"
        >
          <Home className="h-4 w-4" />
        </Button>
        
        <div className="hidden sm:flex items-center gap-1 px-2">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-2xl h-9 w-9"
            asChild
          >
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-2xl h-9 w-9"
            asChild
          >
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-4 w-4" />
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-2xl h-9 w-9"
            asChild
          >
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter className="h-4 w-4" />
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-2xl h-9 w-9"
            asChild
          >
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram className="h-4 w-4" />
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-2xl h-9 w-9"
            asChild
          >
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <Youtube className="h-4 w-4" />
            </a>
          </Button>
        </div>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => scrollToSection("contact")}
          className="rounded-2xl h-9 w-9"
        >
          <Mail className="h-4 w-4" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          onClick={toggleTheme}
          className="rounded-2xl h-9 w-9"
        >
          {theme === "light" ? (
            <Moon className="h-4 w-4" />
          ) : (
            <Sun className="h-4 w-4" />
          )}
        </Button>

        <Button
          onClick={() => scrollToSection("contact")}
          className="hidden sm:inline-flex ml-2 rounded-2xl h-9 px-4"
        >
          Reach Me
        </Button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
