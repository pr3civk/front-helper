import {
  Code2,
  Cog,
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  Music2,
  VideoIcon,
} from "lucide-react";

export const Routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
    bgColor: "bg-sky-500/10",
  },
  {
    label: "Conversation",
    icon: MessageSquare,
    href: "/chat-ai",
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
  },
  {
    label: "Image Generator",
    icon: ImageIcon,
    href: "/image-generation",
    color: "text-red-500",
    bgColor: "bg-red-500/10",
  },
  {
    label: "Video Generator",
    icon: VideoIcon,
    href: "/video-generation",
    color: "text-green-700",
    bgColor: "bg-green-500/10",
  },
  {
    label: "Music Generator",
    icon: Music2,
    href: "/music-generation",
    color: "text-gray-400",
    bgColor: "bg-gray-500/10",
  },
  {
    label: "Code Generator",
    icon: Code2,
    href: "/code-generation",
    color: "text-pink-700",
    bgColor: "bg-pink-500/10",
  },
  {
    label: "Settings",
    icon: Cog,
    href: "/settings",
    color: "text-stone-200",
    bgColor: "bg-stone-500/10",
  },
];
