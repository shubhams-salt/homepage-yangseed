import React from "react";
import Navbar from "@/components/common/Navbar";
import LandingPage from "./LandingPage";

export default function LandingPageContainer() {
  return (
    <div
      className="flex flex-col gap-0 min-h-[100dvh] h-[100dvh] max-h-[100dvh] bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(#007FBF00, #0A1A46), url('/homePage/homepageBg.png')`,
      }}
    >
      <Navbar />
      <LandingPage />
    </div>
  );
}
