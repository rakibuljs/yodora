const PricingCard = ({ item, onEarly }) => {
  const { Colors, plan, cta, description, feature, monthlyPrice, yearlyPrice } =
    item;
  return (
    <div className="bg-primary text-white px-[20px] lg:px-[35px] rounded-xl shadow-lg transition hover:scale-105 duration-700 relative">
      <span
        className={
          plan === "Professional"
            ? "absolute right-[-5px] top-0 rounded-r-2xl rounded-b-2xl text-primary font-medium text-sm px-4 py-2 border-[2px] border-secondary border-solid"
            : ""
        }
        style={{
          background: "linear-gradient(0deg, #FFB84C 0%, #FFCD82 100%)",
        }}
      >
        {plan === "Professional" ? "most popular" : ""}
      </span>
      <button className="px-6 py-2 rounded-xl border mt-10">{plan}</button>

      <div className="text-white text-[36px] lg:text-[56px] font-bold leading-[44px] lg:leading-[64px] tracking-tight pt-[20px] lg:pt-[44px]">
        {onEarly ? yearlyPrice : monthlyPrice}
        {plan === "Professional" || plan === "Team" ? (
          <span className="text-base tracking-normal font-normal ml-2">
            per month
          </span>
        ) : (
          ""
        )}
      </div>

      <p className="font-semibold text-base pt-5">{description}</p>
      <div className="pt-[40px] flex flex-col gap-y-[16px]">
        {feature.map((f, index) => (
          <div className="flex gap-x-5" key={index}>
            <span className="w-6 h-6 lg:w-8 lg:h-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
              >
                <path
                  d="M13 1C6.37931 1 1 6.37931 1 13C1 19.6207 6.37931 25 13 25C19.6207 25 25 19.6207 25 13C25 6.37931 19.6207 1 13 1ZM13 2.24138C18.9379 2.24138 23.7586 7.06207 23.7586 13C23.7586 18.9379 18.9379 23.7586 13 23.7586C7.06207 23.7586 2.24138 18.9379 2.24138 13C2.24138 7.06207 7.06207 2.24138 13 2.24138ZM17.3525 9.88605C17.1947 9.89122 17.0346 9.9587 16.9104 10.0828L12.5862 14.5723L10.331 12.1518C10.1034 11.9035 9.71043 11.8826 9.46215 12.1102C9.21387 12.3378 9.19294 12.7311 9.42053 12.9794L12.1312 15.8966C12.2553 16.0207 12.4 16.1034 12.5862 16.1034C12.7517 16.1034 12.9171 16.0413 13.0412 15.9172L17.7998 10.931C18.0274 10.6828 18.0275 10.2898 17.7792 10.0622C17.6654 9.93809 17.5103 9.88087 17.3525 9.88605Z"
                  fill={Colors}
                  stroke={Colors}
                />
              </svg>
            </span>
            <span className="text-white text-base">{f}</span>
          </div>
        ))}
      </div>
      <button
        style={{
          background: Colors,
          boxShadow: "0px 4px 20px 0px rgba(255, 184, 76, 0.30)",
        }}
        className="px-8 py-4 text-primary w-full rounded-2xl mb-10 mt-10 lg:mt-[44px] font-medium hover:bg-secondary transition-all duration-500 "
      >
        {cta}
      </button>
    </div>
  );
};

export default PricingCard;
