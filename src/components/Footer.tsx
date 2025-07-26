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

function Footer() {
  return (
    <footer className="border-t pt-8 pb-16 text-sm text-muted-foreground">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-between gap-8">

        {/* copyright (left) */}
        <div className="flex-1">
          <span> © {new Date().getFullYear()} Dominick DeVincenzo</span>  
        </div>

        {/* page links & socials (middle-left) */}
        <div className="flex-1 flex items-center gap-2 justify-center md:justify-start">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                {/* home link */}
                <BreadcrumbLink asChild>
                  <Link href="#home">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <SlashIcon />
              </BreadcrumbSeparator>

              {/* about link */}
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="#about">About</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <SlashIcon />
              </BreadcrumbSeparator>

              {/* projects link */}
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="#projects">Projects</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* social links (middle-right) */}
          <div className="flex-1 flex justify-center md:justify-start gap-4">
            <a 
            href="mailto:devindm101@gmail.com"
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
        </div>

        {/* toggle light/dark mode (right) */}
        <div className="flex-1 flex justify-end">
          <ThemeToggle />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
