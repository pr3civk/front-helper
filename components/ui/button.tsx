import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  `
    inline-flex items-center justify-center 
    rounded-md text-sm font-medium relative
    isolate before:absolute before:w-[10%] before:z-[-1]
    overflow-hidden rounded-full duration-500 before:aspect-square before:rounded-full 
    before:inset-0 before:m-auto hover:duration-200 hover:before:scale-[10] 
    before:duration-300 before:opacity-0 hover:before:opacity-100 disabled:pointer-events-none disabled:opacity-500
  `,
  {
    variants: {
      variant: {
        default: "text-white bg-violet-700 before:bg-violet-900 ",
        destructive: "bg-red-600 text-destructive-foreground before:bg-red-500",
        secondary:
          "border border-input bg-background before:bg-emerald-200 hover:text-accent-foreground hover:bg-violet-700 ",

        ghost:
          "before:bg-violet-700 before:text-accent-foreground focus:border-none dark:before:bg-violet-900 hover:text-white hover:duration-0 duration-0",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
