import { creatorItems } from "@/constans";
import CreatorCard from "./CreatorCard";

const Creator = () => {
  return (
    <div>
      <div className="md:container lg:pt-[136px] flex  flex-col lg:flex-row lg:justify-between lg:gap-x-[216px] px-4 pt-[56px]">
        <div>
          <h1 className="lg:text-[56px] lg:font-bold lg:leading-[64px] lg:tracking-[-1.4px] text-primary  text-[32px] font-semibold tracking-tight">
            Why become a creator?
          </h1>
          <p className="text-primary lg:text-lg lg:tracking-[-0.45px] pt-[16px] mx-auto text-base tracking-tight">
            Engage with your supporters and subscribers to sell your skills,
            knowledge and passions
          </p>
          <button className="px-8 py-4 bg-primary rounded-2xl text-white lg:text-lg lg:mt-[40px] mt-8 text-sm font-medium">
            Become a creator
          </button>
        </div>
        <div className="grid lg:grid-cols-2  grid-cols-1 lg:gap-x-[100px] lg:gap-y-[45px] pt-[64px] lg:pt-0 gap-y-[60px]">
          {creatorItems.map((creator) => (
            <CreatorCard key={creator.id} creator={creator} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Creator;
