import { Heading } from "@/components/ui/typography/heading";
import { baumans } from "@/lib/fonts";
import FAQCard from "./FAQCard";

const FAQS = [
  {
    question: "What does Yangseed stand for?",
    answer:
      "It’s a community built on growth, balance and connection—designed to support your personal journey toward a healthier and more intentional way of living.",
  },
  {
    question: "What exactly is a holistic wellness club?",
    answer:
      "It’s a private space that covers mental wellness, movement, nutrition and stress management—everything you need for wellness living in one place.",
  },
  {
    question: "How does the online wellness community work?",
    answer:
      "It’s a digital platform where you can join live sessions, access expert content and connect with members—so you always feel supported wherever you are.",
  },
  {
    question: "How much does membership cost?",
    answer:
      "It’s a simple monthly fee that gives you full access to all programs, events and resources—so your wellness stays affordable and consistent over time.",
  },
  {
    question: "Who should join Yangseed?",
    answer:
      "It’s designed for anyone who wants to improve their wellbeing, whether you’re starting fresh or looking to deepen your current practices in a supportive space.",
  },
  {
    question: "Are the programs evidence-based?",
    answer:
      "Yes, everything we share is grounded in science-backed methods—developed with experts to ensure your wellness practices are safe, effective and sustainable.",
  },
  {
    question: "Do I need special equipment?",
    answer:
      "No, everything is created to be accessible with little to no equipment—so you can follow along at home, while traveling or wherever you feel most comfortable.",
  },
  {
    question: "Can total beginners join?",
    answer:
      "Absolutely, all programs are designed with flexible levels—so beginners feel at ease while more experienced members can continue to grow and be challenged.",
  },
];

export default function FAQContainer() {
  return (
    <div className="faqContainer | flex flex-col gap-16 my-16 md:my-20 lg:my-28 px-4 mx-auto w-full">
      <Heading
        headingLevel="h2"
        size={56}
        className={`${baumans.className} text-center`}
      >
        FAQs
      </Heading>
      <div className="faqLists | flex flex-col gap-6 max-w-[800px] w-full mx-auto">
        {FAQS.map((faq, index) => (
          <FAQCard key={index} {...faq} />
        ))}
      </div>
    </div>
  );
}
