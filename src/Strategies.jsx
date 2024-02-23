import { CloudLightningIcon } from "lucide-react";

const Strategies = () => {
  return (
    <section className=" w-full flex py-8 items-center justify-center">
      <div className="lg:w-[40%] max-w-[1920px]">
        <div className="flex flex-col gap-6 items-center">
          <h2 className="lg:w-[72%] rounded-xl text-white tracking-tighter font-[800] text-[72px] lg:text-[192px] lg:leading-[170px] text-center bg-[#1a2737] ">
            Smart
          </h2>
          <div className="lg:w-[95%] rounded-xl text-[72px] tracking-tighter text-white font-[800] lg:text-[192px] lg:leading-[170px] text-center bg-[#1a2737] ">
            Efficient
          </div>
          <p className="text-center mb-11 text-[#ffffff99] text-[20px] lg:text-[28px]">
            We enhance LTV and ROI metrics by implementing strategies and
            delivering solutions that align with your KPIs
          </p>
          <CloudLightningIcon color="yellow" size={50} />
        </div>
      </div>
    </section>
  );
};

export { Strategies };
