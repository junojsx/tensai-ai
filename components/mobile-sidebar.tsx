"use client";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const MobileSidebar = () => {
  return (
    <>
      <Button
        className="md:hidden"
        variant={"ghost"}
        aria-label="Menu"
        aria-expanded="false"
        aria-controls="sidebar"
      >
        <Menu className="h-6 w-6 cursor-pointer" />
      </Button>
    </>
  );
};

export default MobileSidebar;
