import React from "react";
import { FaGithub, FaInstagram, FaReddit, FaDiscord } from "react-icons/fa";
import { TbBrandFiverr } from "react-icons/tb";
import { SiThreads } from "react-icons/si";

export interface SocialMediaLink {
  name: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
}

// Social Media Links Configuration
export const socialMediaLinks: Record<string, SocialMediaLink> = {
  github: {
    name: "GitHub",
    url: "https://github.com/glaxindev",
    icon: FaGithub,
  },
  instagram: {
    name: "Instagram",
    url: "https://www.instagram.com/realglaxin/",
    icon: FaInstagram,
  },
  threads: {
    name: "Threads",
    url: "https://www.threads.com/@realglaxin",
    icon: SiThreads,
  },
  fiverr: {
    name: "Fiverr",
    url: "https://fiverr.com/glaxindev",
    icon: TbBrandFiverr,
  },
  discord: {
    name: "Discord",
    url: "https://discord.com/users/620569922870837253",
    icon: FaDiscord,
  },
  reddit: {
    name: "Reddit",
    url: "https://www.reddit.com/user/realglaxin/",
    icon: FaReddit,
  },
};
export const getActiveSocialMediaLinks = (): SocialMediaLink[] => {
  return Object.values(socialMediaLinks).filter(
    (link) => link.url && link.url.trim() !== ""
  );
};
