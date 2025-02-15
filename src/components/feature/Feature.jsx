import { featureItems } from "@/constans";
import FeatureCard from "./FeatureCard";
import FeatureDetails from "./FeatureDetails";

const Feature = () => {
  return (
    <div className="bg-primary w-full">
      <div className="md:container px-4 pt-[128px]">
        <div>
          <h2 className="lg:text-[72px] text-[30px] lg:font-bold font-medium lg:leading-[80px] leading-10 lg:tracking-[-1.8px] tracking-[-0.75px] text-secondary text-opacity-2 ">
            Get direct
          </h2>
          <h2 className="lg:text-[72px] text-[29px] lg:font-bold font-medium lg:leading-[80px] leading-10 lg:tracking-[-1.8px] tracking-[-0.75px] text-white">
            knowledge and insights.
          </h2>
        </div>
        <ul className="flex flex-col md:flex-row gap-x-8 lg:pt-[112px] pt-[48px] gap-y-[10px] md:gap-y-0 ">
          {featureItems.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </ul>
        <div className="lg:pt-[112px] pt-[48px]">
          <FeatureDetails />
        </div>
      </div>
    </div>
  );
};
export default Feature;
