import { CloudLightningIcon } from "lucide-react";

const Service = () => {
  return (
    <section className="w-full py-16 bg-[#000f21] flex justify-center">
      <div className="lg:w-[70%] flex flex-col items-center  max-w-[1920px]">
        <Grid />
        <CloudLightningIcon className="mt-24" color="yellow" size={50} />
      </div>
    </section>
  );
};

const Grid = () => {
  return (
    <div className="lg:grid lg:grid-cols-2 grid grid-cols-1 gap-2 lg:gap-4 text-[64px] font-bold text-white">
      <div className="lg:w-full w-[390px] h-[96px] cursor-pointer text-[32px] lg:text-[64px] flex justify-center items-center rounded-lg lg:h-[448px] bg-[#ed724b]">
        <p> Creative</p>
      </div>
      <div className="lg:w-full text-[32px] lg:text-[64px] cursor-pointer  h-[96px] flex justify-center items-center rounded-lg lg:h-[448px] bg-[#ef8b7d]">
        <p> Content</p>
      </div>
      <div className="lg:w-full  text-[32px] lg:text-[64px] cursor-pointer  h-[96px] flex justify-center items-center rounded-lg lg:h-[448px] bg-[#a470f7]">
        <p className="lg:max-w-[300px]"> Influencer Marketing</p>
      </div>
      <div className="lg:w-full text-[32px] lg:text-[64px] cursor-pointer  h-[96px] flex justify-center items-center rounded-lg lg:h-[448px] bg-[#73c9fa]">
        <p> Social Media Marketing</p>
      </div>
      <div className="lg:w-full text-[32px] lg:text-[64px] cursor-pointer h-[96px] flex justify-center items-center rounded-lg lg:h-[448px] bg-[#66d996]">
        <p> Paid Social</p>
      </div>
      <div className="lg:w-full text-[32px] lg:text-[64px] cursor-pointer h-[96px] flex justify-center items-center rounded-lg lg:h-[448px] bg-[#ce365c]">
        <p> Social Selling</p>
      </div>
    </div>
  );
};

export { Service };
