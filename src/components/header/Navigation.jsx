import { navItems } from "@/constans";
import Logo from "@/public/Logo.svg";
import Image from "next/image";
import Link from "next/link";
import Menu from "@/public/menu.svg";
const Navigation = () => {
  return (
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
        <a href="">
          <Image
            src={Menu}
            alt="menu"
            className="inline-block"
            width={24}
            height={24}
          />
        </a>
      </div>
    </nav>
  );
};
export default Navigation;
