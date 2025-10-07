"use client";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Sidebar from "./sidebar";

const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Button
          className="md:hidden"
          variant={"ghost"}
          aria-label="Menu"
          aria-expanded="false"
          aria-controls="sidebar"
        >
          <Menu className="h-6 w-6 cursor-pointer" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0">
        {/* @ts-ignore */}
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
