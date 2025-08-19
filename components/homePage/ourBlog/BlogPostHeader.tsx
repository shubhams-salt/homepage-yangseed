import { Heading } from "@/components/ui/typography/heading";
import { Paragraph } from "@/components/ui/typography/paragraph";
import { baumans } from "@/lib/fonts";

export default function BlogPostHeader() {
  return (
    <div className="head | flex flex-col gap-6 w-[90%] max-w-[768px] mx-auto">
      <Paragraph className="font-light -mb-2 text-center">OUR BLOG</Paragraph>
      <Heading
        className={`${baumans.className} font-500 text-center`}
        size={56}
        headingLevel="h2"
      >
        Knowledge is health power
      </Heading>
      <Paragraph
        className="text-center w-[90%] mx-auto"
        size={18}
        style={{ color: "var(--babyBlue)" }}
      >
        Your journey starts with understanding your body, habits, and choices.
        Explore our blogs for expert tips, ingredient breakdowns, and deep dives
        on how to live a healthy lifestyle — and why it’s the best investment
        you can make.
      </Paragraph>
    </div>
  );
}
