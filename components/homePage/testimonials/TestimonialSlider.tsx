import { CSSProperties } from "react";
import TestimonialCard from "./TestimonialCard";
import type { TestimonialDataTypes } from "./TestimonialContainer";
import "@/styles/homePage/testimonials/testimonialSlider.css";

type TestimonialSliderPropsType = {
  dir: "left" | "right";
  data: TestimonialDataTypes[];
};

export default function TestimonialSlider({
  dir,
  data,
}: TestimonialSliderPropsType) {
  return (
    <>
      <div
        className="testimonialSlider | flex gap-2 w-full"
        data-dir={dir}
        style={
          {
            "--totals_cards": data.length,
            justifyContent: dir === "left" ? "end" : "start",
          } as CSSProperties
        }
      >
        {data.map((d, i) => (
          <TestimonialCard key={i} {...d} />
        ))}
      </div>
    </>
  );
}
