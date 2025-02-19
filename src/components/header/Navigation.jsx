"use client";
import { navItems } from "@/constans";
import Logo from "@/public/Logo.svg";
import Image from "next/image";
import Link from "next/link";
import Menu from "@/public/menu.svg";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
const Navigation = () => {
  const [isMenu, setIsMenu] = useState(false);
  const handleMenuSetup = () => {
    setIsMenu(!isMenu);
  };
  return (
    <div>
      <nav className="flex items-center justify-between md:pt-[32px] pt-4">
        <div className="flex items-center gap-x-8">
          <Image
            src={Logo}
            alt="logo"
            className="inline-block w-[72px] h-[24px] md:w-[93.024px]"
            height={23}
            width={93}
          />
          <ul className="hidden lg:flex items-center gap-x-8">
            {navItems.map((item) => (
              <li
                key={item.id}
                className="text-primary font-medium text-lg hover:text-secondary transition-colors duration-500"
              >
                <Link href={item.path}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden lg:flex gap-x-8">
          <button className="text-primary text-lg font-medium hover:text-secondary transition-colors duration-500">
            Sign in
          </button>
          <button className="bg-primary px-8 py-[10px] text-white rounded-2xl hover:bg-secondary transition-colors duration-500">
            Get Started
          </button>
        </div>
        <div className="lg:hidden block">
          <Link href="" onClick={handleMenuSetup}>
            {isMenu ? (
              <IoClose size={20} />
            ) : (
              <Image
                src={Menu}
                alt="menu"
                className="inline-block"
                width={24}
                height={24}
              />
            )}
          </Link>
        </div>
      </nav>
      {isMenu && (
        <ul className="lg:hidden  md:flex flex-col items-center gap-5 right-[20px] absolute mt-4 bg-secondary p-10  rounded-xl pb-10 z-50 shadow-lg">
          {navItems.map((item) => (
            <li
              key={item.id}
              className="text-primary font-medium text-sm hover:text-white transition-colors duration-500"
            >
              <Link href={item.path}>{item.title}</Link>
            </li>
          ))}
          <button className="font-medium hover:text-white transition-colors duration-500 bg-black text-white px-4 py-1 rounded-xl mt-2 text-sm">
            Sign in
          </button>
        </ul>
      )}
    </div>
  );
};
export default Navigation;
