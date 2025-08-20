import React from "react";
import TestimonialHeader from "./TestimonialHeader";
import TestimonialSlider from "./TestimonialSlider";

export type TestimonialDataTypes = {
  name: string;
  location: string;
  title: string;
  feedback: string;
};

const TESTIMONIAL_DATA1: TestimonialDataTypes[] = [
  {
    name: "Sophia M.",
    location: "New York, USA",
    title: "Praesent dapibus neque id cursus faucibus!",
    feedback:
      "Praesent dapibus neque id cursus faucibus tortor neque egestas auguae eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi tincidunt quis accumsan porttitor facilisis luctus metus. sent dapibus neque id cursus faucibus tortor neque egestas auguae eu vulputate ma",
  },
  {
    name: "Daniel K.",
    location: "Toronto, Canada",
    title: "A real community",
    feedback:
      "I joined for the fitness, but I stayed for the people. The community aspect makes me feel supported every single day.",
  },
  {
    name: "Priya S.",
    location: "Mumbai, India",
    title: "Everything in one place",
    feedback:
      "Having nutrition, mindfulness, and movement resources together saves me so much time. It’s a complete package for wellbeing.",
  },
  {
    name: "James R.",
    location: "London, UK",
    title: "Beginners friendly",
    feedback:
      "I was nervous about starting, but the beginner-friendly programs made me feel comfortable and motivated from day one.",
  },
  {
    name: "Clara L.",
    location: "Berlin, Germany",
    title: "Evidence-based and practical",
    feedback:
      "What I love most is that the practices are rooted in science but still very easy to apply in everyday life.",
  },
  {
    name: "Miguel A.",
    location: "Barcelona, Spain",
    title: "More energy every day",
    feedback:
      "The combination of movement and nutrition guidance has boosted my energy levels. I feel sharper and more productive at work.",
  },
];

const TESTIMONIAL_DATA2: TestimonialDataTypes[] = [
  {
    name: "Hannah T.",
    location: "Sydney, Australia",
    title: "Stress finally under control",
    feedback:
      "The breathing techniques and mindfulness practices really helped me reduce anxiety. I feel calmer and more focused.",
  },
  {
    name: "Omar N.",
    location: "Dubai, UAE",
    title: "Flexible and accessible",
    feedback:
      "I travel a lot for work, but I can access everything online. It fits perfectly with my lifestyle.",
  },
  {
    name: "Lina P.",
    location: "Stockholm, Sweden",
    title: "Praesent dapibus neque id cursus faucibus!",
    feedback:
      "Praesent dapibus neque id cursus faucibus tortor neque egestas auguae eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi tincidunt quis accumsan porttitor facilisis luctus metus. sent dapibus neque id cursus faucibus tortor neque egestas auguae eu vulputate ma",
  },
  {
    name: "Kevin J.",
    location: "Chicago, USA",
    title: "Great expert guidance",
    feedback:
      "The advice from coaches feels trustworthy and practical. I’ve learned habits that actually stick.",
  },
  {
    name: "Amara F.",
    location: "Cape Town, South Africa",
    title: "A safe space for growth",
    feedback:
      "It feels like a judgment-free zone where everyone is supportive. I’ve grown so much personally since joining.",
  },
  {
    name: "Louis C.",
    location: "Paris, France",
    title: "Better sleep and focus",
    feedback:
      "After following the stress management modules, my sleep improved dramatically. I wake up refreshed and ready for the day.",
  },
];

export default function TestimonialContainer() {
  return (
    <div className="testimonialContainer | overflow-hidden">
      <div className="flex flex-col gap-12 md:gap-14 lg:gap-16 max-w-[1224px] my-6 mx-5 md:my-10 md:mx-10 lg:my-12 lg:mx-auto w-full">
        <TestimonialHeader />
        <div className="flex flex-col gap-2">
          <TestimonialSlider dir="right" data={TESTIMONIAL_DATA1} />
          <div className="hidden md:block">
            <TestimonialSlider dir="left" data={TESTIMONIAL_DATA2} />
          </div>
        </div>
      </div>
    </div>
  );
}
