import { CloudLightningIcon } from "lucide-react";
import { Looper } from "./Looper";

const Service = () => {
  return (
    <section className="w-full py-16 bg-[#000f21] flex justify-center">
      <div className="lg:w-[70%] w-full flex flex-col gap-4 items-center  max-w-[1920px]">
        <Looper />
        <Grid />
        <CloudLightningIcon className="mt-24" color="yellow" size={50} />
      </div>
    </section>
  );
};

const Grid = () => {
  const GridInfo = [
    {
      text: "Creative",
      color: "#ed724b",
    },
    {
      text: "Content",
      color: "#ef8b7d",
    },
    {
      text: "Influencer Marketing",
      color: "#a470f7",
    },
    {
      text: "Social Media Marketing",
      color: "#73c9fa",
    },
    {
      text: "Paid Social",
      color: "#66d996",
    },
    {
      text: "Social Selling",
      color: "#ce365c",
    },
  ];
  return (
    <div className="lg:grid lg:grid-cols-2 grid grid-cols-1 gap-2 lg:gap-4 text-[64px] font-bold text-white">
      {GridInfo.map((item) => (
        <div
          className="lg:w-full text-center p-8 w-[390px] h-[96px] cursor-pointer text-[32px] lg:text-[64px] flex justify-center items-center rounded-lg lg:h-[448px]"
          style={{
            backgroundColor: item.color,
          }}
        >
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export { Service };
