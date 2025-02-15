import Image from "next/image";
import TickSvg from "@/public/Vector.svg";

const PricingCard = ({ item }) => {
  const { Colors, plan, price, description, feature } = item;
  return (
    <div className="bg-primary text-white px-[20px] lg:px-[35px] rounded-xl  lg:w-1/2 w-full shadow-lg transition hover:scale-105 duration-700">
      <button className="px-6 py-2 rounded-xl border mt-10">Personal</button>
      <h2 className="text-white text-[36px] lg:text-[56px] font-bold leading-[44px] lg:leading-[64px] tracking-tight pt-[20px] lg:pt-[44px]">
        {price}
      </h2>
      <p className="font-medium text-base pt-5">{description}</p>
      <div className="pt-[40px] flex flex-col gap-y-[16px]">
        {feature.map((f, index) => (
          <div className="flex gap-x-5" key={index}>
            <span className="w-6 h-6 lg:w-8 lg:h-8">
              <Image
                src={TickSvg}
                alt="image"
                layout="responsive"
                width={30}
                height={30}
              />
            </span>
            <span className="text-white text-base">{f}</span>
          </div>
        ))}
      </div>
      <button
        style={{
          background: Colors,
        }}
        className="px-8 py-4 text-primary w-full rounded-2xl mb-10 mt-[20px] lg:mt-[44px] font-medium"
      >
        Start for free
      </button>
    </div>
  );
};

export default PricingCard;
