"use client";

import { UserButton } from "@clerk/nextjs";
import { useState, useEffect } from "react";

import MobileSidebar from "./mobile-sidebar";
import { ModeToggle } from "@/components/theme-switcher";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 786);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex items-center p-4 dark:bg-inherit">
      {isMobile && <MobileSidebar />}
      <div className="flex w-full justify-end items-center gap-4">
        <UserButton afterSignOutUrl="/" />
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
