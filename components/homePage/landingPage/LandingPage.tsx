import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/typography/heading";
import { Paragraph } from "@/components/ui/typography/paragraph";
import { baumans } from "@/lib/fonts";
import Image from "next/image";
import React from "react";

type ImageSvgLandingTypes = {
  type?: "image" | "svg";
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  svg?: React.ReactNode;
}[];

const LANDINGPAGE_IMAGES: ImageSvgLandingTypes = [
  {
    type: "image",
    src: "/1-1",
    alt: "Landing Page Image 1",
    width: 150,
    height: 230,
  },
  {
    type: "svg",
    svg: (
      <svg
        width="107"
        height="94"
        viewBox="0 0 107 94"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.19803 87.7073C7.19803 87.7073 -0.965722 78.6688 0.0951041 65.7154C0.567466 59.9461 2.86963 53.4006 8.53798 46.5315C8.53798 46.5315 22.1816 27.7714 51.5412 20.5834C51.5412 20.5834 93.3262 11.0812 106.97 -0.00415039C106.97 -0.00415039 108.188 34.1061 95.1528 58.3485C95.1528 58.3485 72.1287 108.539 8.53798 89.6564C8.53798 89.6564 27.8261 84.0524 32.9426 81.0473C32.9426 81.0473 61.53 80.8851 75.4178 73.9817C75.4178 73.9817 46.8303 79.9101 37.7346 78.3674C40.2157 77.0394 42.8097 75.5412 45.48 73.8497C49.1532 71.5237 52.4486 69.1635 55.3782 66.8756C57.7002 66.4557 60.1821 65.9047 62.7888 65.1802C67.2707 63.9349 71.2206 62.4295 74.6058 60.9067C74.6058 60.9067 60.1495 65.2112 56.6577 65.1301C56.6577 65.1301 83.2149 42.9991 91.7421 25.8223C91.7421 25.8223 75.7836 45.314 49.8355 63.8307C49.8355 63.8307 52.3937 48.9688 58.6068 38.4918C58.6068 38.4918 49.9571 50.9179 45.3281 67.6072C45.3281 67.6072 33.0245 76.1344 28.273 78.3276C28.273 78.3276 30.4249 58.3087 34.5672 52.6236C34.5672 52.6236 29.0444 60.2578 24.009 80.4803C24.009 80.4787 13.3697 85.6771 7.19803 87.7073Z"
          fill="white"
          fillOpacity="0.3"
        />
      </svg>
    ),
  },
  {},
  {
    type: "image",
    src: "/2-1",
    alt: "Landing Page Image 2",
    width: 150,
    height: 140,
  },
  {
    type: "image",
    src: "/2-2",
    alt: "Landing Page Image 3",
    width: 150,
    height: 230,
  },
  {
    type: "image",
    src: "/2-3",
    alt: "Landing Page Image 4",
    width: 150,
    height: 130,
  },
  {
    type: "image",
    src: "/3-1",
    alt: "Landing Page Image 5",
    width: 150,
    height: 230,
  },
  {
    type: "image",
    src: "/3-2",
    alt: "Landing Page Image 6",
    width: 150,
    height: 130,
  },
  {
    type: "image",
    src: "/3-3",
    alt: "Landing Page Image 7",
    width: 150,
    height: 230,
  },
];

export default function LandingPage() {
  return (
    <div className="flex justify-between items-center grow max-w-[1224px] w-full mx-auto">
      <div className="left | flex flex-col justify-center gap-8 min-h-full h-max w-full max-w-[1224px] lg:w-[60%] px-5 py-10 md:py-15 md:px-10 lg:py-16 mx-auto">
        <Heading
          headingLevel="h1"
          size={80}
          className={`${baumans.className} `}
        >
          The Exclusive Global <strong className="font-[600]">Community</strong>{" "}
          for Health Enthusiasts
        </Heading>
        <div className="flex flex-col gap-6">
          <Paragraph size={20} className="text-white/80">
            Get insider knowledge, connect with like-minded people, and enjoy
            exclusive discounts on health & wellness products.
          </Paragraph>
          <Paragraph size={20} variant={"semibold"}>
            All in one inspiring place.
          </Paragraph>
        </div>
        <Button
          className="p-3 md:p-4 md:h-max max-w-80 md:font-bold"
          variant={"gradient"}
        >
          Join the Community
        </Button>
      </div>
      <div className="right | relative hidden lg:flex gap-2.5 px-5 w-[40%] h-max">
        {Array.from({ length: 3 })
          .fill(0)
          .map((_, index) => (
            <div key={index} className={index + 1 + " | flex flex-col gap-2.5"}>
              {LANDINGPAGE_IMAGES.slice(index * 3, index * 3 + 3).map(
                (item, index) => {
                  if (item.type === "image")
                    return (
                      <Image
                        key={index}
                        src={`/homePage/landingPage${item.src}.jpg`}
                        alt={item.alt ?? ""}
                        width={item.width}
                        height={item.height}
                        style={{
                          width: item.width,
                          height: item.height,
                          borderRadius: 12,
                          objectFit: "cover",
                          objectPosition: "center",
                        }}
                      />
                    );
                  if (item.type === "svg")
                    return (
                      <div
                        key={index}
                        className="flex items-center justify-center"
                        style={{
                          width: item.width,
                          height: item.height,
                          transform: "translate(15%, -12%)",
                        }}
                      >
                        {item.svg}
                      </div>
                    );
                  return <React.Fragment key={index}></React.Fragment>;
                }
              )}
            </div>
          ))}

        <div className="glassEffect | absolute flex flex-col gap-3 bottom-4 -left-4">
          <div className="glass | flex items-center gap-2.5 py-2.5 px-5 rounded-[12px] bg-[#FFFFFF99] backdrop-blur-[4px] w-max">
            <span>
              <svg
                width="37"
                height="32"
                viewBox="0 0 37 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.45279 29.8845C2.45279 29.8845 -0.329078 26.8045 0.0324075 22.3906C0.193369 20.4246 0.977851 18.1942 2.90939 15.8535C2.90939 15.8535 7.55856 9.46083 17.5631 7.01145C17.5631 7.01145 31.8017 3.77353 36.4508 -0.00390625C36.4508 -0.00390625 36.866 11.6194 32.4241 19.8802C32.4241 19.8802 24.5784 36.983 2.90939 30.5486C2.90939 30.5486 9.48197 28.6391 11.2254 27.615C11.2254 27.615 20.9668 27.5597 25.6992 25.2074C25.6992 25.2074 15.9578 27.2275 12.8584 26.7018C13.7038 26.2493 14.5877 25.7388 15.4977 25.1624C16.7493 24.3698 17.8723 23.5655 18.8706 22.7859C19.6618 22.6428 20.5075 22.4551 21.3958 22.2082C22.923 21.7838 24.269 21.2709 25.4225 20.752C25.4225 20.752 20.4964 22.2188 19.3066 22.1911C19.3066 22.1911 28.3562 14.6498 31.2619 8.79666C31.2619 8.79666 25.8239 15.4386 16.9818 21.7483C16.9818 21.7483 17.8536 16.684 19.9707 13.1139C19.9707 13.1139 17.0233 17.3482 15.4459 23.0352C15.4459 23.0352 11.2534 25.9409 9.63426 26.6883C9.63426 26.6883 10.3675 19.8667 11.7791 17.9294C11.7791 17.9294 9.89711 20.5308 8.18127 27.4218C8.18127 27.4213 4.55585 29.1927 2.45279 29.8845Z"
                  fill="#0A1A46"
                />
              </svg>
            </span>
            <Paragraph
              color="var(--bgNdTextBlue)"
              size={14}
              variant={"semibold"}
            >
              Real People. Real Growth
            </Paragraph>
          </div>
          <div className="glass | flex items-center gap-2.5 py-2.5 px-5 rounded-[12px] bg-[#FFFFFF99] backdrop-blur-[4px] w-max">
            <div className="flex gap-0">
              {Array.from({ length: 3 })
                .fill(0)
                .map((_, i) => (
                  <Image
                    key={i}
                    src={`/homePage/landingPage/connect-${i + 1}.png`}
                    className={`w-10 h-10 rounded-full ${
                      i !== 0 ? "-ml-3" : ""
                    } border-3`}
                    alt="Connect"
                    width={40}
                    height={40}
                  />
                ))}
            </div>
            <Paragraph
              color="var(--bgNdTextBlue)"
              size={14}
              variant={"semibold"}
            >
              Connect. Grow. Thrive
            </Paragraph>
          </div>
        </div>
      </div>
    </div>
  );
}
