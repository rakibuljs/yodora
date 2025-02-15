import Image from "next/image";

const CreatorCard = ({ creator }) => {
  const { title, description, image } = creator;
  return (
    <div>
      <div className="flex lg:flex-none flex-col items-center lg:items-start lg:justify-start justify-center  ">
        <Image
          src={image}
          alt={title}
          className="lg:w-[108px] inline-block lg:h-[128px] h-[96px] w-[96px] "
        />
        <div className="text-primary text-xl font-semibold tracking-tight pt-6 text-wrap ">
          {title}
        </div>
        <div className="text-center lg:text-start">{description}</div>
      </div>
    </div>
  );
};
export default CreatorCard;
