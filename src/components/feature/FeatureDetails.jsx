import { featureDetails } from "@/constans";

import Image from "next/image";
const FeatureDetails = () => {
  return (
    <div className="flex justify-between flex-col lg:flex-row items-center gap-y-[88px] lg:gap-y-0">
      <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-x-[114px] gap-y-[16px] ">
        <div>
          <h2 className="text-secondary lg:text-[60px] font-bold leading-[80px] tracking-[-1.8px] text-[40px]">
            {featureDetails.creator}
          </h2>
          <p className="text-white md:text-2xl  text-base">creators</p>
        </div>
        <div>
          <h2 className="text-secondary lg:text-[60px] font-bold leading-[80px] tracking-[-1.8px] text-[40px]">
            {featureDetails.users}
          </h2>
          <p className="text-white md:text-2xl text-base">users</p>
        </div>
        <div>
          <h2 className="text-secondary lg:text-[60px] font-bold leading-[80px] tracking-[-1.8px] text-[40px]">
            {featureDetails.sessions}
          </h2>
          <p className="text-white md:text-2xl  text-base">sessions</p>
        </div>
      </div>
      <div className="pb-8">
        <div className="flex items-center gap-x-[24px]">
          <p className="text-white lg:text-2xl text-base">
            Explore the marketplace
          </p>
          <div className="bg-secondary  text-white rounded-full lg:w-[64px]  lg:h-[64px] w-[36px] h-[36px] flex items-center justify-center">
            <svg
              width="10"
              height="26"
              viewBox="0 0 15 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L13 13L1 25"
                stroke="#2B2730"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FeatureDetails;
