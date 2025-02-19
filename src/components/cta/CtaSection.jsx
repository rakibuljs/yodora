const CtaSection = () => {
  return (
    <section className="md:container pt-[64px] lg:px-0 px-4">
      <div className="relative flex flex-col items-center bg-primary px-8 py-28 rounded-2xl overflow-hidden">
        <div className="top-0 z-10 absolute bg-accent-500 w-1/5 h-2" />
        <div className="left-[4%] absolute bg-gradient-to-l from-white to-transparent opacity-20 blur-2xl rounded-[50%] w-[50rem] h-28 -rotate-45" />
        <div className="left-[35%] absolute bg-gradient-to-l from-white to-transparent opacity-20 blur-2xl rounded-[50%] w-[40rem] h-28 -rotate-45 visible" />

        <h3 className="mb-4 font-bold lg:text-[3.5rem]/[4rem] text-center text-white tracking-tight text-[32px]">
          Engage without limits
        </h3>
        <p className="pb-10 text-center lg:text-lg text-base text-white lg:tracking-tight">
          Join a growing community and talk with your favorite creators
        </p>

        <div className="z-10 bg-gradient-to-b from-accent-500 to-accent-200 p-[.125rem] rounded-[1.125rem]">
          <button className="bg-gradient-to-t from-secondary to-orange-200 hover:drop-shadow-[0_0px_35px_rgba(255,184,76,0.2)] px-8 py-4 rounded-2xl font-medium text-primary-500 hover:text-white tracking-tight transition-all duration-200">
            More information
          </button>
        </div>
      </div>
    </section>
  );
};
export default CtaSection;
