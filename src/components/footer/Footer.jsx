import Image from "next/image";
import Logo from "@/public/Logo.svg";

import Link from "next/link";
import { footerItems, LinkItems } from "@/constans";

const Footer = () => {
  return (
    <footer className="md:container pt-[64px] mb-[100px] px-4 lg:px-0">
      <div className="flex justify-between lg:items-center lg:flex-row flex-col-reverse items-start lg:gap-0 gap-[64px]">
        <div className="lg:-mt-[70px]">
          <Image
            src={Logo}
            alt="yodora"
            className="md:w-[102px] md:h-[130px] h-[32px] w-[96px]"
          />
          <div className="flex gap-x-4 md:pt-0 pt-8">
            {LinkItems.map((l, index) => (
              <div
                key={index}
                className="hover:bg-secondary hover:rounded-md transition-colors duration-500"
              >
                <Link href={"#"}>
                  <Image src={l.image} />
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="grid lg:grid-cols-4 grid-cols-2 xl:gap-x-20 lg:gap-x-12 gap-x-[53px] gap-y-8 md:grid-cols-4 md:gap-x-[60px]">
          {footerItems.map((item, index) => (
            <div key={index}>
              <h3 className="text-primary text-lg font-semibold md:text-[17px]">
                {item.title}
              </h3>
              <ul className="flex flex-col gap-2 pt-4">
                {item.items.map((f) => (
                  <li
                    key={f}
                    className="lg:text-base text-primary hover:text-secondary transition-colors duration-500 text-sm"
                  >
                    <Link href={"#"}>{f}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};
export default Footer;
