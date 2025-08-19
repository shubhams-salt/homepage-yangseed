import { Paragraph } from "@/components/ui/typography/paragraph";
import PerfectForCard from "./PerfectForCard";

const PERFECTFOR = [
  {
    image: "joinDeskBound",
    title: "Desk‑bound professionals who need energy without stimulants.",
  },
  {
    image: "joinBusyParent",
    title: "Busy parents juggling spreadsheets and school runs.",
  },
  {
    image: "joinWeekendWarriors",
    title: "Weekend warriors craving pain‑free mobility.",
  },
];

export default function PerfectFor() {
  return (
    <div className="flex flex-col gap-6">
      <div className="perfectFor | flex flex-col gap-6">
        <Paragraph variant={"medium"} size={20} className="text-white">
          Perfect for:
        </Paragraph>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PERFECTFOR.map((perfect, index) => (
          <PerfectForCard
            key={index}
            title={perfect.title}
            src={perfect.image}
          />
        ))}
      </div>
    </div>
  );
}
