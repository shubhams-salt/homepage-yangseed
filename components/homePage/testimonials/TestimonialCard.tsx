import { Paragraph } from "@/components/ui/typography/paragraph";
import { TestimonialDataTypes } from "./TestimonialContainer";
import { Heading } from "@/components/ui/typography/heading";
import { baumans } from "@/lib/fonts";

export default function TestimonialCard({
  name,
  location,
  title,
  feedback,
}: TestimonialDataTypes) {
  return (
    <div className="testimonialCard | flex flex-col gap-8 p-5 md:p-7.5 lg:p-10 bg-white min-w-[16rem] md:min-w-[20rem] lg:min-w-[24rem]">
      <div className="details | flex flex-col gap-2">
        <Paragraph
          className="font-semibold"
          size={20}
          style={{ color: "var(--bgNdTextBlue)" }}
        >
          {name}
        </Paragraph>
        <Paragraph size={14} style={{ color: "var(--bgNdTextBlue)" }}>
          {location}
        </Paragraph>
      </div>
      <Heading
        headingLevel="h3"
        size={32}
        className={baumans.className}
        style={{ color: "var(--bgNdTextBlue)" }}
      >
        "{title}"
      </Heading>
      <Paragraph
        className="font-normal"
        style={{
          color: "var(--bgNdTextBlue)",
          display: "-webkit-box",
          WebkitLineClamp: 6,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}
      >
        "{feedback}"
      </Paragraph>
    </div>
  );
}
