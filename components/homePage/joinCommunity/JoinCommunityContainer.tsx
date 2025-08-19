import JoinCommunityHeader from "./JoinCommunityHeader";
import PerfectFor from "./PerfectFor";

export default function JoinCommunityContainer() {
  return (
    <div className="flex items-center justify-center My-12 px-5 md:My-20 md:px-10 lg:My-24 lg:px-24">
      <div
        className="joinCommunity | flex flex-col gap-12 md:gap-14 lg:gap-16 max-w-[1224px] w-full mx-auto h-max px-5 py-16 md:py-20 md:px-7 lg:py-28 lg:px-10 rounded-3xl"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(14, 35, 94, 0.66) 0%, #0E235E 32.99%, #0E235E 100%), url('/homePage/joinCommunity/joinCommunity.png')`,
        }}
      >
        <JoinCommunityHeader />
        <PerfectFor />
      </div>
    </div>
  );
}
