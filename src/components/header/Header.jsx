import Hero from "./Hero";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="md:container max-w-7xl px-4 ">
      <Navigation />
      <Hero />
    </header>
  );
};
export default Header;
