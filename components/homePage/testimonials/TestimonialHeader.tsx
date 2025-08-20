import { Heading } from "@/components/ui/typography/heading";
import { Paragraph } from "@/components/ui/typography/paragraph";
import { baumans } from "@/lib/fonts";

export default function TestimonialHeader() {
  return (
    <div className="head | flex flex-col gap-6 w-[90%] max-w-[768px] mx-auto">
      <Paragraph className="font-light -mb-2 text-center">
        OUR TESTIMONIALS
      </Paragraph>
      <Heading
        className={`${baumans.className} font-500 text-center`}
        size={56}
        headingLevel="h2"
      >
        What Our Community Is Saying
      </Heading>
    </div>
  );
}
