import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const headingVariants = cva("", {
  variants: {
    variant: {
      default: "text-white font-bold",
    },
    size: {
      default: "text-16 lh-1",
      80: "text-80/16 md:text-80/20",
      56: "text-56/12 md:text-56/14",
      40: "text-40/8 md:text-40/10",
      32: "text-32/8",
      24: "text-24/6",
      20: "text-20/5",
      16: "text-16/4",
      14: "text-14/3.5",
      12: "text-12/3",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

function Heading({
  className,
  variant,
  size,
  headingLevel = "h1",
  ...props
}: React.ComponentProps<"h1"> &
  VariantProps<typeof headingVariants> & {
    headingLevel?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  }) {
  const Comp = headingLevel;

  return (
    <Comp
      className={cn(headingVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Heading, headingVariants };
