import BannerImage from "@/public/Dashboard.png";
import Image from "next/image";
const Banner = () => {
  return (
    <section className="relative">
      <div className="absolute bottom-0 bg-primary w-full h-1/2 -z-10" />
      <div className="lg:container grid justify-center lg:justify-start items-center px-4 ">
        <Image
          src={BannerImage}
          alt="bannerimage"
          className="object-cover w-[343px] lg:w-full"
        />
      </div>
    </section>
  );
};
export default Banner;
