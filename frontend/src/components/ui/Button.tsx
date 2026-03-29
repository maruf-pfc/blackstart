import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap font-mono text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent disabled:pointer-events-none disabled:opacity-50 uppercase tracking-widest transition-all",
  {
    variants: {
      variant: {
        default:
          "bg-[#00E5FF] text-[#050505] shadow hover:bg-[#00B8CC]",
        destructive:
          "bg-red-500 text-white shadow-sm hover:bg-red-500/90",
        outline:
          "border border-[#1F1F23] bg-transparent shadow-sm hover:bg-[#1F1F23] hover:text-[#E4E4E7]",
        secondary:
          "bg-[#111111] text-[#E4E4E7] shadow-sm hover:bg-[#1F1F23]",
        ghost: "hover:bg-[#1F1F23] hover:text-[#E4E4E7]",
        link: "text-[#00E5FF] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 px-8 py-2",
        sm: "h-8 px-4 text-xs",
        lg: "h-14 px-10",
        icon: "h-9 w-9",
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
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
