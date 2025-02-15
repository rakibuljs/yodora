import Image from "next/image";

const FeatureCard = ({ feature }) => {
  const { username, image } = feature;
  return (
    <div>
      <Image
        src={image}
        className="inline-block rounded-2xl object-cover w-[343] h-[444] lg:h-[522px] lg:w-[392px]"
      />
    </div>
  );
};
export default FeatureCard;
