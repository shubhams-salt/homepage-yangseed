import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/typography/heading";
import { Paragraph } from "@/components/ui/typography/paragraph";
import { baumans } from "@/lib/fonts";
import Image from "next/image";

type AchieveGoalCardPropsTypes = {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  buttonText: string;
  bgColor: string;
  headColor: string;
  descColor: string;
};

export default function AchieveGoalCards({
  imageSrc,
  imageAlt,
  title,
  description,
  buttonText,
  bgColor,
  headColor,
  descColor,
}: AchieveGoalCardPropsTypes) {
  return (
    <div
      className="flex flex-col md:flex-row sticky top-0"
      style={{
        background: `var(--${bgColor})`,
      }}
    >
      <div className="image-container | min-w-full md:min-w-[50%]">
        <Image
          src={`/homePage/achieveGoals/${imageSrc}.png`}
          alt={imageAlt}
          className="w-full h-[280px] md:h-[450px] lg:h-[540px] object-cover object-center"
          height={540}
          width={720}
        />
      </div>
      <div className="card | flex flex-col justify-center gap-6 px-5 py-8 md:px-10 md:py-12 lg:px-16 lg:py-20">
        <Heading
          headingLevel="h3"
          size={40}
          className={`${baumans.className} font-medium`}
          style={{ color: headColor }}
        >
          {title}
        </Heading>
        <Paragraph style={{ color: descColor }}>{description}</Paragraph>
        <Button className="px-4 py-2 md:px-6 md:py-4 rounded-full h-max w-fit font-medium">
          {buttonText}
        </Button>
      </div>
    </div>
  );
}
