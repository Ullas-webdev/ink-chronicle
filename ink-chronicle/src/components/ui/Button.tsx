import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes } from "react";

const buttonStyles = cva(
  "group relative inline-flex items-center justify-center gap-2 whitespace-nowrap text-xs uppercase tracking-widest2 transition-all duration-500 ease-lux focus-visible:outline-none disabled:opacity-40 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        solid:
          "bg-gold text-ink-black px-8 py-4 hover:bg-gold-soft",
        outline:
          "border border-gold/50 text-bone px-8 py-4 hover:border-gold hover:text-gold",
        ghost:
          "text-bone/80 px-2 py-2 hover:text-gold",
      },
      size: {
        default: "",
        sm: "px-5 py-3 text-[10px]",
      },
    },
    defaultVariants: { variant: "solid", size: "default" },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyles> {}

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button className={cn(buttonStyles({ variant, size }), className)} {...props} />
  );
}
