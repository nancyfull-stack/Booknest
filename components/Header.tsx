import { CrownIcon } from "lucide-react";
import React from "react";
import ModeToggle from "./ModeToggle";

function Header() {
  return (
    <header className="flex justify-between border-b border-foreground/30 px-4 py-2">
      <span className="flex gap-2 items-center">
        <CrownIcon /> BookNest
      </span>
      <ModeToggle />
    </header>
  );
}

export default Header;