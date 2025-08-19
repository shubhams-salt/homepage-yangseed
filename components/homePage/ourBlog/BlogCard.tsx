import { Paragraph } from "@/components/ui/typography/paragraph";
import Image from "next/image";

type BlogCardPropsType = {
  img: string;
  date: string;
  title: string;
  description: string;
};

export default function BlogCard({
  img,
  date,
  title,
  description,
}: BlogCardPropsType) {
  return (
    <div className="flex flex-col gap-6">
      <Image
        className="w-full object-cover object-position rounded-[20px] h-[240px] md:h-[260px] lg:h-[280px]"
        src={`/homePage/blog/${img}.png`}
        height={280}
        width={400}
        alt={title}
      />
      <div className="description | flex flex-col gap-5 w-full">
        <Paragraph>{date}</Paragraph>
        <Paragraph className="font-bold" size={20}>
          {title}
        </Paragraph>
        <Paragraph
          className="font-normal"
          color="var(--babyBlue)"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {description}
        </Paragraph>
      </div>
    </div>
  );
}
