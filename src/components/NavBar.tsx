"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "./ui/separator";
import { Send, Mailbox, Menu, FileUser } from "lucide-react";
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
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { toast } from "sonner";
import { Avatar } from "@/components/ui/avatar";
import Image from "next/image";
import Link from "next/link";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

function saveToClipboard(email: string) {
  navigator.clipboard.writeText(email);
  toast.custom(() => (
    <div className="mx-auto text-sm px-4 py-2 rounded-md bg-muted text-foreground shadow-md">
      copied to clipboard 👍
    </div>
  ));
}

function NavBar() {
  // track resume clicks w/ GA4
  const handleResumeClick = () => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "resume_click", {
        event_category: "engagement",
        event_label: "nav_button",
        transport_type: "beacon",
      });
    }
  };

  return (
    <div className="flex items-center justify-between gap-2 py-6">
      {/* avatar and name/title */}
      <Link href="/" className="flex items-center gap-2 group">
        <div className="relative w-10 h-10 rounded-full overflow-hidden">
          <Avatar className="w-full h-full">
            <Image
              src="/me3.jpeg"
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
        <div>
          <h3>Dominick DeVincenzo</h3>
          <span className="text-sm text-muted-foreground">
            Software Engineer
          </span>
        </div>
      </Link>

      <div className="flex items-center gap-2">
        {/* links */}
        <div className="hidden md:flex items-center gap-1">
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

          <div className="flex h-6 items-center">
            <Separator orientation="vertical" className="bg-border" />
          </div>

          {/* resume HoverCard */}
          <HoverCard openDelay={200}>
            <HoverCardTrigger asChild>
              <a
                href="/Resume_2025.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Resume"
                onClick={handleResumeClick}
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
                    onClick={() =>
                      (window.location.href = "mailto:hello@dominick.dev")
                    }
                  >
                    Send me an email
                    <Send className="ml-auto h-3 w-3 stroke-[1.5]" />
                  </Button>
                </DropdownMenuItem>
                {/* copy email */}
                <DropdownMenuItem
                  className="rounded-lg"
                  onClick={() => saveToClipboard("hello@dominick.dev")}
                >
                  <Button
                    variant="ghost"
                    size="sm"
                    className="justify-start text-left text-sm"
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
                  hello@dominick.dev
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* mobile menu */}
        <div className="md:hidden flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="size-8 relative group rounded-lg"
              >
                <Mailbox />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-55 p-0">
              <DropdownMenuGroup>
                <DropdownMenuItem className="rounded-lg">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full justify-start text-left flex text-sm"
                    onClick={() =>
                      (window.location.href = "mailto:hello@dominick.dev")
                    }
                  >
                    Send me an email
                    <Send className="ml-auto h-3 w-3 stroke-[1.5]" />
                  </Button>
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="rounded-lg"
                  onClick={() => saveToClipboard("hello@dominick.dev")}
                >
                  <Button
                    variant="ghost"
                    size="sm"
                    className="justify-start text-left text-sm"
                  >
                    Copy email
                  </Button>
                </DropdownMenuItem>
                <DropdownMenuSeparator className="p-0 h-0" />
                <DropdownMenuItem
                  disabled
                  className="!bg-blue-900 px-3 py-2 text-xs w-full rounded-none pl-5"
                >
                  hello@dominick.dev
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-56 p-4 bg-background border-l border-border"
            >
              <SheetHeader>
                <SheetTitle>
                  <VisuallyHidden>Navigation Menu</VisuallyHidden>
                </SheetTitle>
              </SheetHeader>

              <nav className="flex flex-col gap-2 mt-4">
                <SheetClose asChild>
                  <Link href="#about">
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-base font-normal"
                    >
                      About
                    </Button>
                  </Link>
                </SheetClose>

                <SheetClose asChild>
                  <Link href="#projects">
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-base font-normal"
                    >
                      Projects
                    </Button>
                  </Link>
                </SheetClose>

                <SheetClose asChild>
                  <a
                    href="/Resume_2025.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-base font-normal"
                    >
                      Resume
                    </Button>
                  </a>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}

export default NavBar;