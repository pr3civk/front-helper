"use client";

import { Menu } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import Sidebar from "@/components/sidebar";

const MobileSidebar = () => {
  return (
      <Sheet >
        <SheetTrigger>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0 w-72 bg-purple-dark dark:bg-black" >
          <Sidebar />
        </SheetContent>
      </Sheet>
  );
};

export default MobileSidebar;
