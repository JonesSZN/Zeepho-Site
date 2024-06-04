import { CloudLightningIcon } from "lucide-react";
import { Looper } from "./Looper";

const Countries = () => {
  return (
    <section className="w-full flex justify-center bg-[#000f21]">
      <div className="lg:w-[50%] w-full flex flex-col gap-4 items-center  max-w-[1920px]">
        <Looper />
        <Grid />
        <CloudLightningIcon className="mt-24" color="yellow" size={50} />
      </div>
    </section>
  );
};

const Grid = () => {
  return (
    <div className="lg:flex lg:flex-row  grid grid-cols-1 gap-4 w-[90%] lg:w-full">
      <Left />
      <Right />
    </div>
  );
};

const Left = () => {
  const LeftArray = [
    "Founded in 2016",
    "$200M+ managed",
    "64 experts",
    "8 languages",
  ];
  return (
    <div className="flex flex-col lg:w-1/2 gap-4">
      {LeftArray.map((text) => (
        <div className="w-full bg-[#1a2737] flex flex-col items-center justify-center rounded-2xl h-[159px]">
          <p className="text-white font-bold text-[28px]">{text}</p>
        </div>
      ))}
    </div>
  );
};
const Right = () => {
  const RightObject = [
    {
      Continent: "North America",
      Campaign: "2400+ campaigns",
      Background: "#a470f7",
    },
    {
      Continent: "Europe",
      Campaign: "1600+ campaigns",
      Background: "#66d996",
    },
    {
      Continent: "South America",
      Campaign: "800 campaigns",
      Background: "#73c9fa",
    },
    {
      Continent: "Asia",
      Campaign: "1200 campaigns",
      Background: "#ef8b7d",
    },
  ];
  return (
    <div className="flex flex-col lg:w-1/2 gap-4">
      {RightObject.map((Title) => (
        <div
          style={{
            backgroundColor: Title.Background,
          }}
          className="w-full bg-[#a470f7] flex  flex-col items-center justify-center rounded-2xl h-[159px]"
        >
          <p className="text-[28px] font-bold  text-[#000f21]">
            {Title.Continent}
          </p>
          <p className="text-[#000f21] text-[24px]">{Title.Campaign}</p>
        </div>
      ))}
    </div>
  );
};

export { Countries };
