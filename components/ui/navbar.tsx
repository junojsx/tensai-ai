import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "./button";
import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <div className="flex items-center p-4">
      <Button
        className="md:hidden"
        variant={"ghost"}
        aria-label="Menu"
        aria-expanded="false"
        aria-controls="sidebar"
      >
        <Menu className="h-6 w-6 cursor-pointer" />
      </Button>
      <div className="flex w-full justify-end">
        <UserButton />
      </div>
    </div>
  );
};

export default Navbar;
