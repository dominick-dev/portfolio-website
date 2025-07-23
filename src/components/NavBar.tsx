"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "./ui/separator";
import { Send, Mailbox, Terminal } from "lucide-react";
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

function saveToClipboard(email: string) {
  navigator.clipboard.writeText(email);
  toast.custom(() => (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-foreground text-sm shadow-md">
      copied to clipboard 👍
    </div>
  ));
}

function NavBar() {
  return (
    <div className="flex items-center gap-2 h-5">
      {/* navbar links */}
      <Button variant="ghost" size="sm">
        About
      </Button>
      <Button variant="ghost" size="sm">
        Projects
      </Button>
      <Button variant="ghost" size="sm">
        Contact
      </Button>
      <Separator className="h-6" orientation="vertical" />

      {/* email hover card */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="size-8 relative group">
            <HoverCard openDelay={100}>
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
            <DropdownMenuItem>
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
            <DropdownMenuItem>
              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-start text-left text-sm"
                onClick={() => saveToClipboard("devindm101@gmail.com")}
              >
                Copy email
              </Button>
            </DropdownMenuItem>
            <DropdownMenuSeparator className="p-0 h-0" />
            {/* hardcoded email */}
            <DropdownMenuItem
              disabled
              className="!bg-stone-700 text-muted-foreground px-3 py-1 text-xs w-full rounded-none"
            >
              devindm101@gmail.com
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default NavBar;
