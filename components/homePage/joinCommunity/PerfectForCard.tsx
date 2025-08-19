import { Paragraph } from "@/components/ui/typography/paragraph";
import Image from "next/image";

type PerfectForCardPropsType = {
  title: string;
  src: string;
};
export default function PerfectForCard({
  title,
  src,
}: PerfectForCardPropsType) {
  return (
    <div className="perfectForCard | flex flex-col gap-5 md:gap-6 lg:gap-7 p-5 lg:p-6 rounded-[20px] bg-[var(--bgNdTextBlue)]">
      <Image
        src={`/homePage/joinCommunity/${src}.png`}
        alt="Title"
        width={320}
        height={200}
        className="rounded-[12px] w-full"
      />
      <Paragraph size={20} className="leading-[1.5] font-500 text-white">
        {title}
      </Paragraph>
    </div>
  );
}
