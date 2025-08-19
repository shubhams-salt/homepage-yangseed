import { Heading } from "@/components/ui/typography/heading";
import { Paragraph } from "@/components/ui/typography/paragraph";
import { baumans } from "@/lib/fonts";

export default function AchieveGoalHeader() {
  return (
    <div className="head | flex flex-col gap-6 w-[90%] max-w-[768px] mx-auto">
      <Heading
        className={`${baumans.className} font-500 text-center`}
        size={56}
        headingLevel="h2"
      >
        Achieve your health goals as you grow with us
      </Heading>
      <Paragraph
        className="text-center w-[90%] mx-auto"
        size={18}
        style={{ color: "var(--babyBlue)" }}
      >
        We blend evidence-based guidance, bite-size learning and peer support so
        you can move from “I should” to “I do” every day.
      </Paragraph>
    </div>
  );
}
