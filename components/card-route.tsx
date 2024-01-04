import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

import { Routes } from "@/app/routes";

const CardRoute = () => {
  const labelstoInclude: string[] = [
    "Conversation",
    "Image Generator",
    "Video Generator",
    "Music Generator",
    "Code Generator",
  ];

  return (
    <div className="flex gap-8 flex-wrap">
      {Routes.filter((tool) => labelstoInclude.includes(tool.label)).map(
        (tool) => (
          <Card
            key={tool.href}
            className="p-4 md:w-56 md:h-56 w-48 h-48 dark:bg-violet-600/10 border-stone-200 dark:border-stone-300/10 flex flex-shrink-0 items-center justify-center 
            hover:shadow-md dark:hover:shadow-stone-200/10 transition cursor-pointer my-4"
          >
            <div className="flex items-center gap-x-4 ">
              <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                <tool.icon
                  className={cn("lg:w-12 lg:h-12 h-10 w-10", tool.color)}
                ></tool.icon>
              </div>
              <div className="text-base md:text-lg  font-semibold ">
                {tool.label}
              </div>
            </div>
            {/* <div className="p-2 w-fit rounded-md bg-violet-500/10">
              <ArrowRight className="w-5 h-5 " />
            </div> */}
          </Card>
        )
      )}
    </div>
  );
};

export default CardRoute;
