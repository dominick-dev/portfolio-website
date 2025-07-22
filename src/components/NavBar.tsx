import { Button } from "@/components/ui/button";

function NavBar() {
  return (
    <div>
      <Button size="sm">Test</Button>
      <Button variant="destructive" size="sm">
        Home
      </Button>
      <Button variant="outline" size="sm">
        About
      </Button>
      <Button variant="ghost" size="sm">
        Projects
      </Button>
    </div>
  );
}

export default NavBar;
