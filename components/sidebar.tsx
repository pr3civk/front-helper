"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { Routes } from "@/app/routes";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="space-y-4 py-4 flex flex-col text-white items-center">
      <div className="flex-1">
        <Link href="/dashboard" className="flex items-center mb-8 mr-8">
          <div className="relative w-20 h-16">
            <Image fill alt="Logo" src="/logo.png" />
          </div>
          <h1 className="text-2xl font-bold text-nowrap">Front Helper</h1>
        </Link>
        <div>
          {Routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className={cn(
                "flex flex-start items-center p-3 w-full cursor-pointer hover:bg-white/10 rounded-lg transition",
                pathname === route.href
                  ? "text-white bg-white/10"
                  : "text-zinc-400"
              )}
            >
              <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
              {route.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
