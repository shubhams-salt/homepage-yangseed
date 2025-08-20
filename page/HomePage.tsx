import Footer from "@/components/common/Footer";
import AchieveGoalsContainer from "@/components/homePage/achieveGoals/AchieveGoalsContainer";
import ContactUsContainer from "@/components/homePage/contactUs/ContactUsContainer";
import FAQContainer from "@/components/homePage/faq/FAQContainer";
import JoinCommunityContainer from "@/components/homePage/joinCommunity/JoinCommunityContainer";
import LandingPageContainer from "@/components/homePage/landingPage/LandingPageContainer";
import BlogPostContainer from "@/components/homePage/ourBlog/BlogPostContainer";
import TestimonialContainer from "@/components/homePage/testimonials/TestimonialContainer";

export default function HomePage() {
  return (
    <>
      <LandingPageContainer />
      <AchieveGoalsContainer />
      <JoinCommunityContainer />
      <BlogPostContainer />
      <TestimonialContainer />
      <FAQContainer />
      <ContactUsContainer />
      <Footer />
    </>
  );
}
