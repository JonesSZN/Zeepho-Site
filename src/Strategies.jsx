import { CloudLightningIcon } from "lucide-react";

const Strategies = () => {
  return (
    <section className=" w-full flex py-8 items-center justify-center">
      <div className="lg:w-[40%] max-w-[1920px]">
        <div className="flex flex-col gap-4 items-center">
          <div className="lg:w-[72%] rounded-xl text-white font-bold text-[72px] lg:text-[178px] lg:leading-[170px] text-center bg-[#1a2737] ">
            Smart
          </div>
          <div className="lg:w-[95%] rounded-xl text-[72px] text-white font-bold lg:text-[178px] lg:leading-[170px] text-center bg-[#1a2737] ">
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
