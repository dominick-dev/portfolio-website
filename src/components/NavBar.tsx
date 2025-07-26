"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "./ui/separator";
import { Send, Mailbox } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";
import { Avatar } from "@/components/ui/avatar";
import Image from "next/image";
import Link from "next/link";
import { FileUser } from "lucide-react";

function saveToClipboard(email: string) {
  navigator.clipboard.writeText(email);
  toast.custom(() => (
    <div className="mx-auto text-sm px-4 py-2 rounded-md bg-muted text-foreground shadow-md">
      copied to clipboard 👍
    </div>
  ));
}

function NavBar() {
  return (
    <div className="flex items-center justify-between gap-2 h-25">
      {/* avatar and name/title */}
      <Link href="/" className="flex items-center gap-2 group">
        <div className="flex items-center gap-2 group">
          <div className="relative w-10 h-10 rounded-full overflow-hidden">
            <Avatar className="w-full h-full">
              <Image
                src="/me3.JPEG"
                alt="Dominick's avatar"
                width={40}
                height={40}
                className="object-cover"
              />
            </Avatar>
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span
              className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 text-2xl animate-wave"
              role="img"
              aria-label="waving hand"
            >
              👋
            </span>
          </div>
        </div>

        <div>
          <h3>Dominick DeVincenzo</h3>
          <span className="text-sm text-muted-foreground">
            Software Engineer
          </span>
        </div>
      </Link>

      {/* links */}
      <div className="flex items-center gap-1 h-5">
        {/* navbar links */}
        <Link href="#about">
          <Button variant="ghost" size="sm" className="rounded-xl">
            About
          </Button>
        </Link>

        <Link href="#projects">
          <Button variant="ghost" size="sm" className="rounded-xl">
            Projects
          </Button>
        </Link>

        <Separator className="h-6" orientation="vertical" />

        {/* resume hover card */}
        <HoverCard openDelay={200}>
          <HoverCardTrigger asChild>
            <a
              href="/Resume_2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition"
              aria-label="View Resume"
            >
              <Button
                variant="ghost"
                size="icon"
                className="size-8 relative group rounded-lg"
              >
                <FileUser />
                <span className="sr-only">View Resume</span>
              </Button>
            </a>
          </HoverCardTrigger>
          <HoverCardContent className="w-auto px-3 py-1 text-sm">
            <p className="text-center">View my resume</p>
          </HoverCardContent>
        </HoverCard>

        {/* email hover card */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="size-8 relative group rounded-lg"
            >
              <HoverCard openDelay={200}>
                <HoverCardTrigger asChild>
                  <span className="absolute inset-0" />
                </HoverCardTrigger>
                <HoverCardContent className="w-auto px-3 py-1 text-sm">
                  <p className="text-center">Message me</p>
                </HoverCardContent>
              </HoverCard>
              <Mailbox />
            </Button>
          </DropdownMenuTrigger>

          {/* dropdown menu for email options */}
          <DropdownMenuContent align="end" className="w-55 p-0">
            <DropdownMenuGroup>
              {/* send email */}
              <DropdownMenuItem className="rounded-lg">
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start text-left flex text-sm"
                  onClick={() => {
                    window.location.href = "mailto:devindm101@gmail.com";
                  }}
                >
                  Send me an email
                  <Send className="ml-auto h-3 w-3 stroke-[1.5]" />
                </Button>
              </DropdownMenuItem>
              {/* copy email */}
              <DropdownMenuItem className="rounded-lg">
                <Button
                  variant="ghost"
                  size="sm"
                  className="justify-start text-left text-sm"
                  onClick={() => saveToClipboard("devindm101@gmail.com")}
                >
                  Copy email
                </Button>
              </DropdownMenuItem>
              <DropdownMenuSeparator className="p-0 h-0" />
              {/* hardcoded email */}
              <DropdownMenuItem
                disabled
                className="!bg-blue-900 px-3 py-2 text-xs w-full rounded-none pl-5"
              >
                devindm101@gmail.com
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}

export default NavBar;
