"use client";

import { Button } from "@/components/ui/button";
import { Input, TextArea } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Heading } from "@/components/ui/typography/heading";
import { Paragraph } from "@/components/ui/typography/paragraph";
import { baumans } from "@/lib/fonts";
import Image from "next/image";

export default function ContactUsContainer() {
  return (
    <div className="contactUsContainer | flex justify-center items-center mx-5 md:mx-8 lg:mx-12 my-16 md:my-20 lg:my-24">
      <div className="contactForm | flex flex-col gap-6 lg:pr-15 w-full lg:w-[50%] h-max">
        <div className="head | flex flex-col gap-6">
          <Heading headingLevel="h2" size={56} className={baumans.className}>
            Contact Us
          </Heading>
          <Paragraph size={18} className="font-normal">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
          </Paragraph>
        </div>
        <div className="form | flex flex-col gap-6">
          <div className="input | flex flex-col gap-3">
            <Label>First Name *</Label>
            <Input type="text" placeholder="Enter first name" />
          </div>
          <div className="input | flex flex-col gap-3">
            <Label>Last Name *</Label>
            <Input type="text" placeholder="Enter last name" />
          </div>
          <div className="input | flex flex-col gap-3">
            <Label>Email Address *</Label>
            <Input type="text" placeholder="Enter email address" />
          </div>
          <div className="input | flex flex-col gap-3">
            <Label>Message *</Label>
            <TextArea placeholder="Tell us what you are looking for" />
          </div>
        </div>
        <Button variant={"gradient"} className="py-2 md:py-3 h-max w-full">
          Submit
        </Button>
      </div>
      <div className="picture | hidden lg:flex h-[750px] w-[50%]">
        <Image
          src="/homePage/contactUs/contactUs.png"
          alt="Contact Us"
          width={720}
          height={960}
          className="h-full w-full object-cover object-center"
        />
      </div>
    </div>
  );
}
