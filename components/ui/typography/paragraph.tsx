import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const paragraphVariants = cva("text-white", {
  variants: {
    variant: {
      default: "",
      light: "font-light",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
    size: {
      default: "text-16 lh-1",
      80: "text-80/16",
      56: "text-56/14",
      40: "text-40/10",
      32: "text-32/8",
      24: "text-24/7",
      20: "text-20/6",
      18: "text-18/4.5",
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

function Paragraph({
  className,
  variant,
  size,
  color,
  ...props
}: React.ComponentProps<"h1"> &
  VariantProps<typeof paragraphVariants> & { color?: string }) {
  return (
    <p
      className={paragraphVariants({ variant, size, className })}
      style={{ color }}
      {...props}
    />
  );
}

export { Paragraph, paragraphVariants };

