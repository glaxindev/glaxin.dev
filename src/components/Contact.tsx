import { useRef } from "react";
import { Button } from "./ui/button";
import { Mail, Github } from "lucide-react";
import config from "@/config";
import { socialMediaLinks, SocialMediaLink } from "@/constants/socialMedia";

const GithubLink = (socialMediaLinks.github as SocialMediaLink).url;

const Contact = () => {
  const ref = useRef(null);

  return (
    <section id="contact" className="py-24 px-4" ref={ref}>
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 reveal-up">
          Get In Touch
        </h2>

        <p className="text-muted-foreground mb-8 max-w-lg mx-auto leading-relaxed reveal-up">
          Building something that needs to scale smoothly and fast? Need a
          full-stack dev who actually ships products that perform? I'm down to
          work on builds that solve real problems. Hit me up if you're serious
          about results.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 reveal-up">
          <Button size="lg" className="rounded-xl px-8" asChild>
            <a href={"mailto:" + config.contact.email}>
              <Mail className="mr-2 h-4 w-4" />
              Send Message
            </a>
          </Button>
          <span className="text-muted-foreground">or</span>
          <Button
            size="lg"
            variant="secondary"
            className="rounded-xl px-8"
            asChild
          >
            <a href={GithubLink} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              View Github
            </a>
          </Button>
        </div>

        <div className="section-divider mt-24" />
      </div>
    </section>
  );
};

export default Contact;
