import { Heading } from "@/components/ui/typography/heading";
import { Paragraph } from "@/components/ui/typography/paragraph";
import { baumans } from "@/lib/fonts";
import React from "react";

export default function JoinCommunityHeader() {
  return (
    <>
      <div className="head | flex flex-col gap-4">
        <Heading
          className={`${baumans.className} font-medium`}
          headingLevel="h2"
          size={56}
        >
          Who Should Join Community
        </Heading>
        <Paragraph className="leading-[1.5]" size={20} color="var(--babyBlue)">
          If you&apos;re{" "}
          <b className="text-white font-medium">
            35 years or older and feel stuck between career, family and creeping
            health warnings
          </b>
          , our supportive, doctor-led space turns small daily habits into
          lifelong results.
        </Paragraph>
      </div>
    </>
  );
}
