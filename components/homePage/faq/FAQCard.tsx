"use client";

import { Paragraph } from "@/components/ui/typography/paragraph";
import { useRef, useState } from "react";

type FAQCardPropsType = { question: string; answer: string };

export default function FAQCard({ question, answer }: FAQCardPropsType) {
  const [isActive, setIsActive] = useState(false);
  const contentRef = useRef<HTMLDivElement | null>(null);

  const handleToggle = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <div className="faqCardCont | overflow-hidden rounded-[20px] bg-[var(--navyBlue)]">
      <div
        className="faqCard | flex flex-col w-full p-5 md:py-6 md:px-6 lg:px-8"
        style={{ transition: "gap 0.25s ease", gap: isActive ? 20 : 0 }}
      >
        <div
          className="flex justify-between gap-3 md:gap-4 cursor-pointer"
          onClick={handleToggle}
        >
          <Paragraph>{question}</Paragraph>
          <span
            style={{
              transition: "rotate 0.25s ease",
              rotate: isActive ? "180deg" : "0deg",
            }}
          >
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 16.7541L4.5 9.2541L5.55 8.2041L12 14.6541L18.45 8.2041L19.5 9.2541L12 16.7541Z"
                fill="white"
              />
            </svg>
          </span>
        </div>
        <div
          ref={contentRef}
          className="flex flex-col gap-5"
          style={{
            height: isActive ? contentRef.current?.scrollHeight : 0,
            transition: "height 0.3s ease",
            overflow: "hidden",
          }}
        >
          <hr style={{ borderColor: "#ffffff40" }} />
          <Paragraph className="!text-[var(--babyBlue)] font-normal leading-[1.5]">
            {answer}
          </Paragraph>
        </div>
      </div>
    </div>
  );
}
