import Image from "next/image";
import PricingCard from "./PricingCard";
import ToggleIcon from "@/public/Toggle.png";
import { PricingItems } from "@/constans";
const Pricing = () => {
  return (
    <section className="md:container lg:pt-[128px] w-[380px] px-4 pt-[64px]">
      <div>
        <h1 className="text-primary text-center lg:text-[56px] font-bold lg:leading-[64px] lg:tracking-[-1.4px] text-[32px] leading-10">
          Start creating today.
        </h1>
        <div className="flex justify-center items-center gap-x-4 pt-[22px]">
          <div className="text-lg text-primary">Monthly</div>
          <div>
            <Image src={ToggleIcon} alt="toggle" />
          </div>
          <div className="text-lg text-primary">Annual</div>
        </div>
        <div className="mt-[48px] flex flex-col lg:flex-row gap-4 w-full">
          {PricingItems.map((item) => (
            <PricingCard item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Pricing;
