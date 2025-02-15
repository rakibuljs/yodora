import { heroItems } from "@/constans";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="md:pt-[112px] pb-[64px] pt-[96px]">
      <div className="flex lg:justify-between lg:gap-x-14">
        <div className="lg:max-w-[810px]">
          <h1 className="text-primary font-bold lg:text-[72px] lg:leading-[80px] lg:tracking-[-1.8px] lg:mx-auto text-[30px] leading-[36px] mx-auto">
            Learn from your favorite creators about{" "}
            <span className="text-[#ffb74cd0]">fantasy reports</span>
          </h1>
          <div className="flex md:items-center md:flex-row flex-col md:gap-x-[20px] md:pt-[19px] pt-[64px]">
            <ul className="flex  gap-x-0 md:gap-x-[-5px]">
              {heroItems.map((item) => (
                <li key={item.id} className="-mr-4">
                  <Image
                    src={item.image}
                    alt=""
                    className="inline-block lg:h-[48px] lg:w-[48px] border border-white object-cover h-[40px] w-[40px] rounded-full outline-none"
                  />
                </li>
              ))}
            </ul>
            <div className="md:pt-0 pt-4">
              <p className="md:text-[20px] font-medium md:leading-[36px] md:tracking-[-0.6px]  text-secondary text-base tracking-[-0.4px]">
                5000+{" "}
                <span className="text-primary">satisfied clients in 2025</span>
              </p>
            </div>
          </div>
        </div>
        <div className="hidden border border-solid border-primary xl:flex items-center justify-center rounded-full xl:w-52 xl:h-52">
          <div className="bg-primary rounded-[164px] flex text-white justify-center items-center flex-col px-8 py-6">
            <p className="text-[48px] font-bold">1:1</p>
            <button className="text-md font-bold tracking-[-0.5px]">
              video calls
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
