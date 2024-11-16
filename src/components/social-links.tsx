"use client";

import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedin, FaXTwitter, FaInstagram } from "react-icons/fa6";
import { BiCube } from "react-icons/bi";

const socialLinks = [
  {
    icon: FaGithub,
    url: "https://github.com/japhet",
    tooltip: "github.com/japhet"
  },
  {
    icon: FaLinkedin,
    url: "https://linkedin.com/in/japhet",
    tooltip: "linkedin.com/in/japhet"
  },
  {
    icon: BiCube,
    url: "https://replit.com/@japhet",
    tooltip: "replit.com/@japhet"
  },
  {
    icon: FaInstagram,
    url: "https://instagram.com/japhet",
    tooltip: "instagram.com/japhet"
  },
  {
    icon: FaXTwitter,
    url: "https://twitter.com/japhet",
    tooltip: "twitter.com/japhet"
  },
];

export function SocialLinks() {
  return (
    <TooltipProvider delayDuration={500}>
      <div className="flex items-center justify-center space-x-6 py-8">
        {socialLinks.map((social) => (
          <Tooltip key={social.url}>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-lg w-10 h-10 hover:bg-accent"
                asChild
              >
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${social.tooltip}`}
                >
                  <social.icon className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
                </a>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="bottom" className="bg-popover text-popover-foreground">
              <p>{social.tooltip}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
}