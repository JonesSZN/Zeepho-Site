import { CloudLightningIcon } from "lucide-react";
import { Looper } from "./Looper";

const Partner = () => {
  return (
    <section className="w-full flex justify-center py-12 bg-[#000f21]]">
      <div className="lg:w-[60%]  w-[95%] flex flex-col gap-4 items-center max-w-[1920px]">
        <Looper />

        <Grid />
        <CloudLightningIcon className="mt-24" color="yellow" size={50} />
      </div>
    </section>
  );
};
const Grid = () => {
  const GridText = [
    "Doosfot",
    "PizzaGame",
    "Playfair",
    "ABND",
    "Microby",
    "IOU",
    "Orange",
    "Mitsy",
    "Exprezz",
    "Beru Eats",
    "Quantik",
    "Riffmax",
  ];
  return (
    <div className="lg:grid lg:w-full w-[90%] lg:grid-cols-4 grid grid-cols-2 gap-4">
      {GridText.map((item) => (
        <div className="w-full h-[129px] bg-[#1a2737]  text-2xl text-white font-bold flex items-center justify-center rounded-xl cursor-pointer">
          <p>{item}</p>
        </div>
      ))}
    </div>
  );
};

export { Partner };
