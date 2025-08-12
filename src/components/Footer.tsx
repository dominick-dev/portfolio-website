"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { SlashIcon, Mail } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import { FileUser } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";

function Footer() {
  // track resume clicks w/ GA4
  const handleResumeClick = () => {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "resume_click", {
        event_category: "engagement",
        event_label: "footer_button",
        transport_type: "beacon",
      } as Record<string, unknown>);
    }
  };

  return (
    <footer className="border-t pt-8 pb-8 text-sm text-muted-foreground">
      <div className="max-w-6xl mx-auto px-4 grid gap-y-8 text-center md:grid-cols-3 md:gap-y-0 md:text-left">
        {/* socials & copyright */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex gap-4">
            <a
              href="mailto:hello@dominick.dev"
              aria-label="Email"
              className="hover:text-foreground transition"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/dominick-dev/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition"
            >
              <SiLinkedin className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/dominick-dev"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition"
            >
              <SiGithub className="h-5 w-5" />
            </a>
          </div>
          <span className="sm:mt-4">
            © {new Date().getFullYear()} Dominick DeVincenzo
          </span>
        </div>

        {/* page links */}
        <div className="flex flex-wrap justify-center gap-2">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="#home">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <SlashIcon className="w-3 h-3" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="#about">About</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <SlashIcon className="w-3 h-3" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="#projects">Projects</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* resume, theme toggle, message */}
        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="flex gap-4">
            <HoverCard openDelay={200}>
              <HoverCardTrigger asChild>
                <a
                  href="/Resume_2025.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition"
                  aria-label="View Resume"
                  onClick={handleResumeClick}
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:bg-muted/60 transition rounded-lg"
                  >
                    <FileUser className="h-[1.2rem] w-[1.2rem]" />
                    <span className="sr-only">View Resume</span>
                  </Button>
                </a>
              </HoverCardTrigger>
              <HoverCardContent className="w-auto px-3 py-1 text-sm">
                <p className="text-center">View my resume</p>
              </HoverCardContent>
            </HoverCard>

            <HoverCard openDelay={200}>
              <HoverCardTrigger asChild>
                <div>
                  <ThemeToggle />
                </div>
              </HoverCardTrigger>
              <HoverCardContent className="w-auto px-3 py-1 text-sm">
                <p className="text-center">Toggle theme</p>
              </HoverCardContent>
            </HoverCard>
          </div>
          <span>Fatto con ❤️ e ☕️ a Washington DC</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
