import { CloudLightningIcon } from "lucide-react";

const Partner = () => {
  return (
    <section className="w-full flex justify-center py-12 bg-[#000f21]]">
      <div className="lg:w-[60%]  w-[95%] flex flex-col items-center max-w-[1920px]">
        <Grid />
        <CloudLightningIcon className="mt-24" color="yellow" size={50} />
      </div>
    </section>
  );
};
const Grid = () => {
  return (
    <div className="lg:grid lg:w-full w-[90%] lg:grid-cols-4 grid grid-cols-2 gap-4">
      <div className="w-full h-[129px] bg-[#1a2737]  text-2xl text-white font-bold flex items-center justify-center rounded-xl cursor-pointer">
        <p>Doosfot</p>
      </div>
      <div className="w-full h-[129px] bg-[#1a2737] text-[18px] lg:text-2xl text-white font-bold flex items-center justify-center rounded-xl cursor-pointer">
        <p>PizzaGame</p>
      </div>
      <div className="w-full h-[129px] bg-[#1a2737] text-[18px] lg:text-2xl text-white font-bold flex items-center justify-center rounded-xl cursor-pointer">
        <p>Playfair</p>
      </div>
      <div className="w-full h-[129px] bg-[#1a2737] text-[18px] lg:text-2xl text-white font-bold flex items-center justify-center rounded-xl cursor-pointer">
        <p>ABND</p>
      </div>
      <div className="w-full h-[129px] bg-[#1a2737] text-[18px] lg:text-2xl text-white font-bold flex items-center justify-center rounded-xl cursor-pointer">
        <p>Microby</p>
      </div>
      <div className="w-full h-[129px] bg-[#1a2737] text-[18px] lg:text-2xl text-white font-bold flex items-center justify-center rounded-xl cursor-pointer">
        <p>IOU</p>
      </div>
      <div className="w-full h-[129px] bg-[#1a2737] text-[18px] lg:text-2xl text-white font-bold flex items-center justify-center rounded-xl cursor-pointer">
        <p>Orange</p>
      </div>
      <div className="w-full h-[129px] bg-[#1a2737] text-[18px] lg:text-2xl text-white font-bold flex items-center justify-center rounded-xl cursor-pointer">
        <p>Mitsy</p>
      </div>
      <div className="w-full h-[129px] bg-[#1a2737] text-[18px] lg:text-2xl text-white font-bold flex items-center justify-center rounded-xl cursor-pointer">
        <p>Exprezz</p>
      </div>
      <div className="w-full h-[129px] bg-[#1a2737] text-[18px] lg:text-2xl text-white font-bold flex items-center justify-center rounded-xl cursor-pointer">
        <p>Beru Eats</p>
      </div>
      <div className="w-full h-[129px] bg-[#1a2737] text-[18px] lg:text-2xl text-white font-bold flex items-center justify-center rounded-xl cursor-pointer">
        <p>Quantik</p>
      </div>
      <div className="w-full h-[129px] bg-[#1a2737] text-[18px] lg:text-2xl text-white font-bold flex items-center justify-center rounded-xl cursor-pointer">
        <p>Riffmax</p>
      </div>
    </div>
  );
};

export { Partner };
