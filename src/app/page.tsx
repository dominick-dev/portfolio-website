import NavBar from "@/components/NavBar";
import AboutMe from "@/components/AboutMe";
import { Separator } from "@/components/ui/separator";

import "@/app/globals.css";
export default function Home() {
  return (
    <div>
      <NavBar />
      <Separator />
      <AboutMe />
    </div>
  );
}
