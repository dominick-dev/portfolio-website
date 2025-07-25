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

function Footer() {
  return (
    <footer className="pt-10 pb-60 text-sm text-muted-foreground">
      <div className="flex flex-col md:flex-row justify-between gap-8">
        {/* copyright (left) */}
        <span> © {new Date().getFullYear()} Dominick DeVincenzo</span>

        {/* page links & socials (middle) */}
        <div>
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

          {/* social links */}
          <div className="flex gap-4">
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
            className="hover:text-foreground transition"
            >
              <SiLinkedin className="h-5 w-5" />
            </a>
            <a 
            href="https://github.com/dominick-dev"
            aria-label="GitHub"
            className="hover:text-foreground transition"
            >
              <SiGithub className="h-5 w-5" />
            </a>

          </div>



        </div>

        {/* toggle light/dark mode (right) */}
      </div>
    </footer>
  );
}

export default Footer;
