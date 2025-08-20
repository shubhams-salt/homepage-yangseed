import Image from "next/image";
import { Button } from "../ui/button";
import { Paragraph } from "../ui/typography/paragraph";
import Logo from "./Logo";

export default function Footer() {
  return (
    <div className="footerContainer | py-12 px-5 md:py-20 md:px-10 lg:py-24 lg:px-24 bg-[var(--footerBlue)]">
      <div className="footer | flex flex-wrap items-start justify-between gap-8 pb-6 max-w-[1224px] mx-auto border-b-1 border-b-[var(--navyBlue)]">
        <div className="aboutCompany | flex flex-col gap-7 w-full lg:w-[390px]">
          <Logo />
          <Paragraph className="leading-[1.5] font-normal" size={14}>
            With 20+ years of experience, my wife Dr. Christa and I focus on
            prevention through nutrition and lifestyle. In your consult, I’ll
            review your concerns, offer tailored recommendations, and provide a
            call transcript.
          </Paragraph>
          <Button>Contact Us</Button>
        </div>
        <div className="companyService | grid grid-cols-2 gap-6 w-full md:w-[70%] lg:w-[390]">
          <div className="company | flex flex-col gap-4">
            <Paragraph className="font-semibold leading-[1.5]" size={18}>
              Company
            </Paragraph>
            <Paragraph className="leading-[1.5]" size={14}>
              Home
            </Paragraph>
            <Paragraph className="leading-[1.5]" size={14}>
              Community
            </Paragraph>
            <Paragraph className="leading-[1.5]" size={14}>
              Store
            </Paragraph>
            <Paragraph className="leading-[1.5]" size={14}>
              Blogs
            </Paragraph>
            <Paragraph className="leading-[1.5]" size={14}>
              About Us
            </Paragraph>
          </div>
          <div className="legal | flex flex-col gap-4">
            <Paragraph className="font-semibold leading-[1.5]" size={18}>
              Legal
            </Paragraph>
            <Paragraph className="leading-[1.5]" size={14}>
              Privacy Policy
            </Paragraph>
            <Paragraph className="leading-[1.5]" size={14}>
              Cookie Policy
            </Paragraph>
            <Paragraph className="leading-[1.5]" size={14}>
              Terms of use
            </Paragraph>
          </div>
        </div>
        <div className="socialMedia | flex flex-col items-start lg:items-end gap-6 w-full md:w-[25%] lg:w-[180]">
          <Image
            className="w-[160px] h-[50px]"
            src="/footer/appStore.png"
            alt="App Store"
            width={160}
            height={50}
          />
          <Image
            className="w-[160px] h-[50px]"
            src="/footer/playStore.png"
            alt="Play Store"
            width={160}
            height={50}
          />
          <div className="social | flex justify-start lg:justify-end gap-6">
            <Image
              className="w-[24px] h-[24px] scale-150"
              src="/footer/instagram.svg"
              alt="Instagram"
              width={24}
              height={24}
            />
            <Image
              className="w-[24px] h-[24px]"
              src="/footer/facebook.svg"
              alt="Facebook"
              width={24}
              height={24}
            />
            <Image
              className="w-[24px] h-[24px]"
              src="/footer/x.svg"
              alt="X"
              width={24}
              height={24}
            />
          </div>
        </div>
      </div>
      <Paragraph className="text-center leading-[1.5] pt-6">Yangseed Planet © 2023</Paragraph>
    </div>
  );
}
