import AchieveGoalCards from "./AchieveGoalCards";
import AchieveGoalHeader from "./AchieveGoalHeader";

const ACHIEVEGOALS_CARDS = [
  {
    image: "forums",
    title: "Forums",
    description:
      "Connect with like-minded people in our online wellness community, share your story, and support others on their journey to a healthy lifestyle—your first step to stronger social wellness.",
    buttonText: "Join the Conversation",
    bgColor: "navyBlue",
    headColor: "white",
    descColor: "var(--babyBlue)",
  },
  {
    image: "courses",
    title: "Courses",
    description:
      "Learn how to build healthy lifestyle habits and maintain them, through step-by-step, doctor-designed courses that fit into your busy life.",
    buttonText: "Start Learning Healthy Habits",
    bgColor: "skyBlue",
    headColor: "var(--footerBlue)",
    descColor: "var(--bgNdTextBlue)",
  },
  {
    image: "challenges",
    title: "Challenges",
    description:
      "Stay motivated with fun, goal-oriented challenges that encourage healthy living, one small win at a time—each tiny win compounds into true wellness living.",
    buttonText: "Take the Wellness Challenge",
    bgColor: "acquaGreen",
    headColor: "var(--footerBlue)",
    descColor: "var(--bgNdTextBlue)",
  },
  {
    image: "qa",
    title: "Q&A Sessions",
    description:
      "Got questions? Our professional coaches and wellness experts host regular Q&A sessions to help you make sense of nutrition, fitness, and the benefits of a healthy lifestyle.",
    buttonText: "Ask the Experts",
    bgColor: "springGreen",
    headColor: "var(--footerBlue)",
    descColor: "var(--bgNdTextBlue)",
  },
  {
    image: "resources",
    title: "Resources",
    description:
      "Download planners, trackers and cheat‑sheets—your evergreen library of wellness resources for life.",
    buttonText: "Explore Resources",
    bgColor: "navyBlue",
    headColor: "white",
    descColor: "var(--babyBlue)",
  },
];

export default function AchieveGoalsContainer() {
  return (
    <div className="achieveGoalsContainer | flex flex-col gap-12 my-16 md:my-20 lg:my-28 w-full">
      <AchieveGoalHeader />
      <div className="cardsContainer | flex flex-col gap-0">
        {ACHIEVEGOALS_CARDS.map((card, index) => (
          <AchieveGoalCards
            key={index}
            imageSrc={card.image}
            imageAlt={card.title}
            title={card.title}
            description={card.description}
            buttonText={card.buttonText}
            bgColor={card.bgColor}
            headColor={card.headColor}
            descColor={card.descColor}
          />
        ))}
      </div>
    </div>
  );
}
