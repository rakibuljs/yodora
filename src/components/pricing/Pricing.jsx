"use client";

import PricingCard from "./PricingCard";

import { PricingItems } from "@/constans";
import { useState } from "react";
const Pricing = () => {
  const [yearly, setYearly] = useState(false);
  return (
    <section className="md:container lg:pt-[128px] w-[380px] px-4 pt-[64px]">
      <div>
        <h1 className="text-primary text-center lg:text-[56px] font-bold lg:leading-[64px] lg:tracking-[-1.4px] text-[32px] leading-10">
          Start creating today<span className="text-secondary">.</span>
        </h1>
        <div className="flex justify-center items-center gap-x-4 pt-[22px]">
          <div className="text-lg text-primary">Monthly</div>
          <div>
            <label className="relative block h-10 w-20 rounded-xl bg-primary hover:cursor-pointer">
              <input
                className="absolute h-0 opacity-0 peer"
                type="checkbox"
                checked={yearly}
                onChange={() => setYearly(!yearly)}
              />
              <span className="before:left-1 before:top-1 before:h-8 before:w-[36px] before:bg-white before:absolute before:rounded-[9px] before:transition-all peer-checked:before:translate-x-[35px] duration-500" />
            </label>
          </div>
          <div className="text-lg text-primary">Yearly</div>
        </div>
        <div className="mt-[48px] grid xl:grid-cols-[33fr_35fr_33fr] lg:grid-cols-2 gap-4">
          {PricingItems.map((item) => (
            <PricingCard item={item} key={item.id} onEarly={yearly} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Pricing;
