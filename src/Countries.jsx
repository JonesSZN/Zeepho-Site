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
    <div className="lg:grid lg:grid-cols-2 grid grid-cols-1 gap-4 w-[90%] lg:w-full">
      <div className="w-full bg-[#1a2737] flex flex-col items-center justify-center rounded-2xl h-[159px]">
        <p className="text-white font-bold text-[28px]">Founded in 2016</p>
      </div>
      <div className="w-full bg-[#a470f7] flex  flex-col items-center justify-center rounded-2xl h-[159px]">
        <p className="text-[28px] font-bold  text-[#000f21]">North America</p>
        <p className="text-[#000f21] text-[24px]">2400+campaigns</p>
      </div>
      <div className="w-full bg-[#1a2737] flex flex-col items-center justify-center rounded-2xl h-[159px]">
        <p className="text-white font-bold text-[28px]">$200M managed</p>
      </div>
      <div className="w-full bg-[#66d996] flex  flex-col items-center justify-center rounded-2xl h-[159px]">
        <p className="text-[28px] font-bold  text-[#000f21]">Europe</p>
        <p className="text-[#000f21] text-[24px]">1600+ campagins</p>
      </div>
      <div className="w-full bg-[#1a2737] flex flex-col items-center justify-center rounded-2xl h-[159px]">
        <p className="text-white font-bold text-[28px]">64 experts</p>
      </div>
      <div className="w-full bg-[#73c9fa] flex  flex-col items-center justify-center rounded-2xl h-[159px]">
        <p className="text-[28px] font-bold  text-[#000f21]">South America</p>
        <p className="text-[#000f21] text-[24px]">800+ campaigns</p>
      </div>
      <div className="w-full bg-[#1a2737] flex flex-col items-center justify-center rounded-2xl h-[159px]">
        <p className="text-white font-bold text-[28px]">8 languages</p>
      </div>
      <div className="w-full bg-[#ef8b7d] flex flex-col items-center justify-center rounded-2xl h-[159px]">
        <p className="text-[28px] font-bold  text-[#000f21]">Asia</p>
        <p className="text-[#000f21] text-[24px]">1200+ campagins</p>
      </div>
    </div>
  );
};

export { Countries };
